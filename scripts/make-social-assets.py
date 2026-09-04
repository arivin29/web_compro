#!/usr/bin/env python3
"""
Menghasilkan aset yang dipakai di luar halaman: ikon Apple dan gambar
pratinjau tautan (Open Graph).

Keduanya butuh latar OPAK dan ukuran tertentu, sesuatu yang tidak bisa
dipenuhi berkas logo apa adanya:

  - Ikon Apple: iOS mengisi bagian transparan dengan hitam, jadi marknya
    disusun di atas putih.
  - Gambar Open Graph: pratinjau tautan mengharapkan sekitar 1200x630.
    Logo persegi 512x512 yang dipakai sebelumnya akan terpotong atau
    ditampilkan sebagai thumbnail kecil, padahal kartunya sudah diminta
    bertipe summary_large_image.

Memakai pembaca dan penulis PNG dari make-logo-dark.py; penskalaan gambar
sumbernya dikerjakan `sips` lebih dulu (lihat catatan pemakaian di bawah).

Pemakaian — jalankan dari akar project:
    sips -Z 760 -s format png public/images/logo/devetek-lockup-dark.png \
         --out /tmp/lockup760.png
    sips -Z 132 -s format png public/images/logo/favicon.png \
         --out /tmp/mark132.png
    python3 scripts/make-social-assets.py /tmp/lockup760.png /tmp/mark132.png
"""
import importlib.util
import sys
from pathlib import Path

spec = importlib.util.spec_from_file_location(
    'mk', Path(__file__).with_name('make-logo-dark.py')
)
mk = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mk)

NAVY = (16, 26, 40)      # brand-navy
WHITE = (255, 255, 255)


def compose(src: Path, out: Path, size: tuple[int, int], bg: tuple[int, int, int]):
    """Susun `src` di tengah kanvas berukuran `size` berlatar `bg`."""
    sw, sh, px = mk.read_png_rgba(src)
    W, H = size
    ox, oy = (W - sw) // 2, (H - sh) // 2

    canvas = bytearray()
    for y in range(H):
        row = bytearray()
        for x in range(W):
            sx, sy = x - ox, y - oy
            if 0 <= sx < sw and 0 <= sy < sh:
                i = (sy * sw + sx) * 4
                r, g, b, a = px[i], px[i + 1], px[i + 2], px[i + 3]
            else:
                r = g = b = a = 0
            row += bytes((
                (r * a + bg[0] * (255 - a)) // 255,
                (g * a + bg[1] * (255 - a)) // 255,
                (b * a + bg[2] * (255 - a)) // 255,
                255,
            ))
        canvas += row

    mk.write_png_rgba(out, W, H, canvas)
    print(f'✓ {out}  {W}x{H}  {out.stat().st_size // 1024}KB')


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 1
    lockup, mark = Path(sys.argv[1]), Path(sys.argv[2])
    compose(lockup, Path('public/images/og-cover.png'), (1200, 630), NAVY)
    compose(mark, Path('src/app/apple-icon.png'), (180, 180), WHITE)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
