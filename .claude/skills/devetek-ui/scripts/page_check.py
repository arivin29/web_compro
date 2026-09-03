#!/usr/bin/env python3
"""
Memeriksa satu halaman yang sudah ter-render.

Dipanggil oleh audit.sh, tapi bisa dijalankan sendiri:

    python3 page_check.py http://localhost:3000/about
    python3 page_check.py out/about.html

Yang diperiksa:
  - status HTTP
  - tepat satu <h1>
  - urutan heading tidak melompat (mis. h2 langsung ke h4)
  - setiap <img> punya atribut alt
  - tidak ada gambar yang sama dipakai dua kali di satu halaman
  - tidak ada kalimat panjang yang muncul dua kali (duplikasi konten)

Mencetak "OK ..." bila lolos, atau daftar temuan bila tidak.
Exit 0 / 1.
"""

import re
import sys
import urllib.request
from collections import Counter

# Frasa yang wajar muncul lebih dari sekali (navigasi, footer, breadcrumb).
ALLOW = {
    'seluruh hak dilindungi undang undang',
    'let technology help you',
}


def fetch(target: str) -> tuple[int, str]:
    """Menerima URL http(s) atau path file HTML hasil `next build`
    (project ini memakai output: 'export', jadi audit penuh bisa membaca
    out/*.html langsung tanpa menyalakan server)."""
    if not target.startswith(('http://', 'https://')):
        with open(target, encoding='utf-8', errors='replace') as f:
            return 200, f.read()
    req = urllib.request.Request(target, headers={'User-Agent': 'devetek-audit'})
    with urllib.request.urlopen(req, timeout=15) as r:
        return r.status, r.read().decode('utf-8', 'replace')


def visible_html(html: str) -> str:
    """Buang <head> dan seluruh <script> — App Router menaruh salinan
    konten di RSC payload, yang akan mengacaukan penghitungan."""
    h = re.sub(r'<head\b.*?</head>', '', html, flags=re.S | re.I)
    h = re.sub(r'<script\b.*?</script>', '', h, flags=re.S | re.I)
    h = re.sub(r'<style\b.*?</style>', '', h, flags=re.S | re.I)
    # Teks sr-only memang sengaja menggandakan label visual, dan elemen
    # aria-hidden tidak dibacakan — keduanya bukan duplikasi konten.
    h = re.sub(r'<span[^>]*\bsr-only\b[^>]*>.*?</span>', ' ', h, flags=re.S | re.I)
    h = re.sub(r'<span[^>]*\baria-hidden\b[^>]*>[^<]*</span>', ' ', h, flags=re.I)
    return h


def text_of(html: str) -> str:
    t = re.sub(r'<[^>]+>', ' ', html)
    t = re.sub(r'&[a-z]+;|&#\d+;', ' ', t)
    t = re.sub(r'[^\w\s]', ' ', t.lower())
    return re.sub(r'\s+', ' ', t).strip()


def main() -> int:
    url = sys.argv[1]
    findings: list[str] = []
    warnings: list[str] = []

    try:
        status, html = fetch(url)
    except Exception as e:  # noqa: BLE001
        print(f'gagal memuat: {e}')
        return 1

    if status != 200:
        findings.append(f'HTTP {status}')

    vis = visible_html(html)

    # ── heading ──
    levels = [int(m) for m in re.findall(r'<h([1-6])\b', vis)]
    h1 = levels.count(1)
    if h1 != 1:
        findings.append(f'jumlah <h1> = {h1}, harus tepat 1')

    prev = 0
    for lv in levels:
        if prev and lv > prev + 1:
            findings.append(f'urutan heading melompat: h{prev} → h{lv}')
            break
        prev = lv

    # ── gambar ──
    imgs = re.findall(r'<img\b[^>]*>', vis)
    no_alt = [i for i in imgs if 'alt=' not in i]
    if no_alt:
        findings.append(f'{len(no_alt)} <img> tanpa atribut alt')

    srcs = []
    for i in imgs:
        m = re.search(r'src="([^"]+)"', i)
        if m:
            # buang query optimizer next/image supaya file yang sama terdeteksi
            s = re.sub(r'^/_next/image\?url=', '', m.group(1))
            s = re.sub(r'&.*$', '', urllib.parse.unquote(s))
            srcs.append(s)
    # Logo memang muncul di header dan footer — bukan duplikasi.
    srcs = [s for s in srcs if '/images/logo/' not in s]
    dup_img = [s for s, n in Counter(srcs).items() if n > 1]
    if dup_img:
        findings.append('gambar dipakai lebih dari sekali: ' + ', '.join(dup_img[:3]))

    # ── duplikasi kalimat ──
    # Header dan footer tampil di semua halaman, jadi dipisahkan:
    # pengulangan DI DALAM konten = temuan; konten yang menggemakan
    # header/footer = peringatan, karena kadang memang disengaja
    # (mis. alamat kantor di halaman Contact).
    chrome = ' '.join(
        m.group(0)
        for tag in ('header', 'footer')
        for m in re.finditer(rf'<{tag}\b.*?</{tag}>', vis, flags=re.S | re.I)
    )
    content_html = vis
    for tag in ('header', 'footer'):
        content_html = re.sub(rf'<{tag}\b.*?</{tag}>', '', content_html, flags=re.S | re.I)

    chrome_text = text_of(chrome)
    words = text_of(content_html).split()
    N = 8  # panjang frasa; cukup panjang agar bukan kebetulan
    grams = Counter(' '.join(words[i:i + N]) for i in range(len(words) - N + 1))
    dup_grams = {g for g, n in grams.items() if n > 1 and g not in ALLOW}
    # Gabungkan posisi n-gram duplikat yang bersebelahan menjadi satu
    # frasa panjang, supaya satu kalimat tidak dilaporkan berkali-kali.
    hits = [i for i in range(len(words) - N + 1)
            if ' '.join(words[i:i + N]) in dup_grams]
    merged: list[str] = []
    run: list[int] = []
    seen: set[str] = set()
    for i in hits + [None]:
        if run and (i is None or i != run[-1] + 1):
            phrase = ' '.join(words[run[0]:run[-1] + N])
            if phrase not in seen:
                seen.add(phrase)
                merged.append(phrase)
            run = []
        if i is not None:
            run.append(i)
    # Satu kalimat yang berulang menghasilkan dua run identik — cukup laporkan sekali.
    merged = [m for m, n in Counter(merged).items()]
    internal = [m for m in merged if m not in chrome_text]
    echoed = [m for m in merged if m in chrome_text]
    # Frasa konten yang identik dengan teks header/footer
    echoed += [g for g in dup_grams if g in chrome_text and g not in merged]

    if internal:
        findings.append(f'{len(internal)} kalimat berulang di dalam konten halaman:')
        findings += [f'  "{m[:90]}…"' for m in internal[:3]]

    if echoed:
        uniq = []
        for e in echoed:
            if not any(e in u for u in uniq):
                uniq.append(e)
        warnings.append(f'{len(uniq)} kalimat konten menggemakan header/footer:')
        warnings += [f'  "{u[:90]}…"' for u in uniq[:2]]

    if findings:
        print('\n'.join(findings))
        if warnings:
            print('peringatan:')
            print('\n'.join('  ' + w for w in warnings))
        return 1

    note = ''
    if warnings:
        note = '  [peringatan: ' + warnings[0].split(' kalimat')[0] + ' gema header/footer]'
    print(f'OK  h1=1  heading={len(levels)}  img={len(imgs)}{note}')
    return 0


if __name__ == '__main__':
    import urllib.parse  # noqa: E402  (dipakai di main)
    sys.exit(main())
