#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
#  Devetek UI — audit Definition of Done
#
#  Menjalankan seluruh pemeriksaan pada SKILL.md §6 secara otomatis.
#  Jalankan setiap kali selesai membuat atau memigrasi halaman.
#
#  Pakai:
#    bash .claude/skills/devetek-ui/scripts/audit.sh            # semua
#    bash .claude/skills/devetek-ui/scripts/audit.sh --fast     # lewati build
#    bash .claude/skills/devetek-ui/scripts/audit.sh --url http://localhost:3000
#
#  Exit 0 bila bersih, 1 bila ada temuan.
# ─────────────────────────────────────────────────────────────
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
cd "$ROOT" || exit 1

FAST=0
URL="http://localhost:3000"
while [ $# -gt 0 ]; do
  case "$1" in
    --fast) FAST=1 ;;
    --url) shift; URL="$1" ;;
  esac
  shift
done

FAIL=0
pass() { printf '  \033[32m✓\033[0m %s\n' "$1"; }
fail() { printf '  \033[31m✗\033[0m %s\n' "$1"; FAIL=1; }
warn() { printf '  \033[33m!\033[0m %s\n' "$1"; }
head1() { printf '\n\033[1m%s\033[0m\n' "$1"; }
SKIPPED=0

check_page() { # <label> <url-atau-file>
  local out
  out=$(python3 "$(dirname "${BASH_SOURCE[0]}")/page_check.py" "$2" 2>&1)
  if echo "$out" | grep -q '^OK'; then
    pass "$1  $(echo "$out" | sed 's/^OK *//')"
  else
    fail "$1"; echo "$out" | sed 's/^/      /'
  fi
}

# Halaman yang memang belum dimigrasi. Seluruh halaman sudah dimigrasi,
# jadi daftar ini kosong dan tidak ada yang dikecualikan dari audit.
LEGACY_OK='__none__'

# Menyaring temuan pada file yang masih ditoleransi.
filter() { grep -vE "$LEGACY_OK" | grep -vE ':[[:space:]]*(\*|//|/\*)' || true; }

# ── 1. Struktur & token ───────────────────────────────────────
head1 "1. Struktur & token"

check_grep() { # <label> <pattern> [extra-exclude]
  local label="$1" pattern="$2" hits
  hits=$(grep -rnE "$pattern" src/ --include='*.tsx' 2>/dev/null | filter)
  if [ -z "$hits" ]; then pass "$label"; else
    fail "$label"; echo "$hits" | head -8 | sed 's/^/      /'
    [ "$(echo "$hits" | wc -l)" -gt 8 ] && echo "      … $(echo "$hits" | wc -l | tr -d ' ') total"
  fi
}

check_grep "Tidak ada container manual (pakai <Container>/<Section>)" 'max-w-7xl|max-w-4xl mx-auto|mx-auto px-6'
check_grep "Tidak ada shim .glass-card" 'glass-card'
check_grep "Tidak ada Lucide (ikon hanya Phosphor)" "from 'lucide-react'"
check_grep "Tidak ada alias warna lama" 'brand-blue-dark|brand-dark|surface-alt|surface-blue|brand-blue-pale|ScrollReveal'
check_grep "Tidak ada <img> mentah (pakai next/image)" '<img '
check_grep "Tidak ada outline-none tanpa pengganti" 'outline-none(?!.*focus:ring)'

# Hex mentah di komponen — token harus lewat tailwind.config.ts
# Pengecualian terdokumentasi: warna resmi WhatsApp, warna logo pada
# ForwardLayers, dan pasangan teks/latar Badge yang sudah dicek kontrasnya.
HEX=$(grep -rnE "#[0-9a-fA-F]{6}" src/ --include='*.tsx' 2>/dev/null \
      | grep -vE '\-\-|aria-hidden' \
      | grep -vE 'WhatsAppFAB.tsx|Button.tsx|Badge.tsx|ForwardLayers.tsx|StatCard.tsx' \
      | filter)
if [ -z "$HEX" ]; then pass "Tidak ada hex mentah di komponen"; else
  warn "Hex mentah ditemukan — pastikan sudah didokumentasikan"
  echo "$HEX" | head -6 | sed 's/^/      /'
fi

# ── 2. Bentuk & radius ────────────────────────────────────────
head1 "2. Bentuk & radius"

PILL=$(grep -rn 'rounded-full' src/ --include='*.tsx' 2>/dev/null \
       | grep -E 'px-[0-9]' \
       | grep -vE 'w-[0-9]+(\.[0-9]+)? h-[0-9]+|h-[0-9]+(\.[0-9]+)? w-[0-9]+')
if [ -z "$PILL" ]; then pass "Tidak ada button/badge berbentuk pill"; else
  fail "Pill ditemukan — badge & button maksimal rounded-sm/md"
  echo "$PILL" | head -8 | sed 's/^/      /'
fi

WIDTH=$(grep -rn 'containerClassName="max-w-' src/ --include='*.tsx' 2>/dev/null | filter)
if [ -z "$WIDTH" ]; then pass "Lebar container lewat prop width, bukan class"; else
  fail "containerClassName max-w — pakai <Section width=\"narrow\"> (dua kelas max-width akan bentrok)"
  echo "$WIDTH" | sed 's/^/      /'
fi

# ── 3. Kontras ────────────────────────────────────────────────
head1 "3. Kontras"

ORANGE=$(grep -rn 'bg-brand-orange' src/ --include='*.tsx' 2>/dev/null \
         | grep -vE 'Button.tsx|h-[0-9.]+ w-[0-9.]+|w-[0-9.]+ h-[0-9.]+|ProcessCard' \
         | grep -E 'text-(white|inverse)')
if [ -z "$ORANGE" ]; then pass "Oranye + teks putih hanya dipakai di Button"; else
  fail "Oranye + putih di luar Button (2.98:1) — untuk teks biasa pakai warna lain"
  echo "$ORANGE" | sed 's/^/      /'
fi

# Hanya periksa TEKS. Baris yang memuat `size={` adalah komponen ikon,
# dan `brand-blue` memang warna yang benar untuk fill ikon.
# Hanya periksa TEKS. `-A2 -B3` ikut membaca baris sekitarnya supaya props
# ikon yang ditulis multi-baris (size={20} di baris terpisah) tidak salah
# ditandai — `brand-blue` memang warna yang benar untuk fill ikon.
BLUE=$(grep -rnE --include='*.tsx' -B3 -A2 'text-brand-blue([^-a-z]|$)' src/ 2>/dev/null \
       | awk 'BEGIN{RS="--\n"} !/size=\{/' \
       | grep -E 'text-brand-blue([^-a-z]|$)' | filter)
if [ -z "$BLUE" ]; then pass "Teks biru memakai varian -strong/-soft"; else
  warn "text-brand-blue untuk teks — di permukaan terang pakai text-brand-blue-strong"
  echo "$BLUE" | head -5 | sed 's/^/      /'
fi

# ── 4. Build ──────────────────────────────────────────────────
# Project ini memakai output: 'export', sehingga `next build` menghasilkan
# HTML statis di out/. Pemeriksaan render membacanya langsung — tidak perlu
# menyalakan server. Bila dev server kebetulan jalan, ia dipakai dan build
# dilewati, karena keduanya berbagi direktori .next.
SERVER_UP=0
RENDER_SRC=""
curl -sf -o /dev/null --max-time 3 "$URL/" 2>/dev/null && SERVER_UP=1

if [ "$FAST" -eq 1 ]; then
  head1 "4. Build"; warn "dilewati (--fast)"
  [ "$SERVER_UP" -eq 1 ] && RENDER_SRC="server"
else
  head1 "4. Build"
  npx tsc --noEmit >/tmp/dv-tsc.log 2>&1 && pass "tsc bersih" \
    || { fail "tsc gagal"; tail -12 /tmp/dv-tsc.log | sed 's/^/      /'; }
  npx next lint >/tmp/dv-lint.log 2>&1 && pass "lint bersih" \
    || { fail "lint gagal"; tail -12 /tmp/dv-lint.log | sed 's/^/      /'; }

  if [ "$SERVER_UP" -eq 1 ]; then
    warn "dev server jalan — build dilewati (berbagi .next); render diperiksa lewat $URL"
    RENDER_SRC="server"
  elif npm run build >/tmp/dv-build.log 2>&1; then
    pass "build sukses"
    RENDER_SRC="out"
  else
    fail "build gagal"; tail -15 /tmp/dv-build.log | sed 's/^/      /'
  fi
fi

# ── 5. Halaman ter-render ─────────────────────────────────────
ROUTES=$(find src/app -name 'page.tsx' 2>/dev/null \
  | sed -e 's|^src/app||' -e 's|/page.tsx$||' -e 's|^$|/|' \
  | grep -v '\[' | sort)

case "$RENDER_SRC" in
  server)
    head1 "5. Halaman ter-render ($URL)"
    for r in $ROUTES; do TARGETS="$URL$r"; check_page "$r" "$TARGETS"; done
    ;;
  out)
    head1 "5. Halaman ter-render (out/)"
    for r in $ROUTES; do
      if [ "$r" = "/" ]; then f="out/index.html"; else f="out${r}.html"; fi
      if [ -f "$f" ]; then check_page "$r" "$f"; else fail "$r  (tidak ada $f)"; fi
    done
    ;;
  *)
    head1 "5. Halaman ter-render"
    warn "dilewati — jalankan tanpa --fast, atau nyalakan 'npm run dev'"
    SKIPPED=1
    ;;
esac

# ── Ringkasan ─────────────────────────────────────────────────
echo
if [ "$FAIL" -eq 0 ] && [ "$SKIPPED" -eq 1 ]; then
  printf '\033[33m! Tidak ada temuan, tetapi pemeriksaan render dilewati.\033[0m\n'
elif [ "$FAIL" -eq 0 ]; then
  printf '\033[32m✓ Audit bersih.\033[0m\n'
else
  printf '\033[31m✗ Ada temuan — perbaiki sebelum menyatakan selesai.\033[0m\n'
fi
exit "$FAIL"
