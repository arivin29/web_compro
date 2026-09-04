#!/usr/bin/env python3
"""
Membuat varian logo untuk permukaan gelap.

Logo master `devetek-lockup.png` punya wordmark berwarna navy pekat. Di atas
header dan footer navy, wordmark itu praktis tidak terlihat. Skrip ini membuat
salinannya dengan wordmark diputihkan, sementara segitiga merah–oranye–biru
dibiarkan apa adanya supaya identitas warnanya tidak hilang.

Pemutihan dibatasi ke kolom di sebelah kanan celah antara ikon dan wordmark.
Membedakan lewat warna saja tidak cukup: daerah tumpang-tindih segitiga merah
dan biru menghasilkan piksel gelap dengan chroma rendah, sehingga ikut
terputihkan dan meninggalkan garis putih di dalam ikon.

Di dalam area wordmark, pemilihan tetap memakai chroma supaya aksen biru pada
huruf "k" tidak ikut diputihkan. Piksel tepi hasil antialias ikut terbawa
karena warnanya juga navy dengan alpha sebagian — bentuk hurufnya tetap halus.

Ditulis tanpa pustaka gambar: hanya zlib dan struct dari pustaka standar,
karena Pillow tidak terpasang di lingkungan ini.
"""
import struct
import zlib
import sys
from pathlib import Path

CHROMA_MAX = 70   # di bawah ini dianggap "tidak berwarna" → bagian wordmark
LUMA_MAX = 150    # dan cukup gelap untuk perlu diputihkan

# Ikon berakhir di kolom 236 dan wordmark mulai di kolom 286; nilai ini
# jatuh di tengah celah tersebut. Dihitung dari profil kolom logo master —
# perbarui bila logo masternya diganti dengan proporsi berbeda.
WORDMARK_X = 261


def read_png_rgba(path: Path):
    d = path.read_bytes()
    if d[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError(f'{path}: bukan berkas PNG')

    pos, idat = 8, bytearray()
    w = h = None
    while pos < len(d):
        ln = struct.unpack('>I', d[pos:pos + 4])[0]
        typ = d[pos + 4:pos + 8]
        body = d[pos + 8:pos + 8 + ln]
        if typ == b'IHDR':
            w, h, bd, ct, cm, fm, il = struct.unpack('>IIBBBBB', body)
            if (bd, ct, il) != (8, 6, 0):
                raise ValueError(f'{path}: hanya mendukung RGBA 8-bit non-interlaced')
        elif typ == b'IDAT':
            idat += body
        pos += 12 + ln

    raw = zlib.decompress(bytes(idat))
    stride = w * 4
    out = bytearray(h * stride)
    prev = bytearray(stride)
    p = 0
    for y in range(h):
        ft = raw[p]; p += 1
        line = bytearray(raw[p:p + stride]); p += stride
        if ft == 1:      # Sub
            for i in range(4, stride):
                line[i] = (line[i] + line[i - 4]) & 0xFF
        elif ft == 2:    # Up
            for i in range(stride):
                line[i] = (line[i] + prev[i]) & 0xFF
        elif ft == 3:    # Average
            for i in range(stride):
                a = line[i - 4] if i >= 4 else 0
                line[i] = (line[i] + ((a + prev[i]) >> 1)) & 0xFF
        elif ft == 4:    # Paeth
            for i in range(stride):
                a = line[i - 4] if i >= 4 else 0
                b = prev[i]
                c = prev[i - 4] if i >= 4 else 0
                pa, pb, pc = abs(b - c), abs(a - c), abs(a + b - 2 * c)
                pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                line[i] = (line[i] + pr) & 0xFF
        elif ft != 0:
            raise ValueError(f'{path}: filter baris {ft} tidak dikenal')
        out[y * stride:(y + 1) * stride] = line
        prev = line
    return w, h, out


def write_png_rgba(path: Path, w: int, h: int, px: bytearray):
    stride = w * 4
    raw = bytearray()
    for y in range(h):
        raw.append(0)  # filter None — ukurannya masih wajar untuk aset ini
        raw += px[y * stride:(y + 1) * stride]

    def chunk(typ: bytes, body: bytes) -> bytes:
        return (struct.pack('>I', len(body)) + typ + body
                + struct.pack('>I', zlib.crc32(typ + body) & 0xFFFFFFFF))

    path.write_bytes(
        b'\x89PNG\r\n\x1a\n'
        + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
        + chunk(b'IDAT', zlib.compress(bytes(raw), 9))
        + chunk(b'IEND', b'')
    )


def main() -> int:
    src = Path('public/images/logo/devetek-lockup.png')
    dst = Path('public/images/logo/devetek-lockup-dark.png')

    w, h, px = read_png_rgba(src)
    if WORDMARK_X >= w:
        raise SystemExit(f'WORDMARK_X ({WORDMARK_X}) di luar lebar gambar ({w})')

    changed = 0
    for y in range(h):
        for x in range(WORDMARK_X, w):
            i = (y * w + x) * 4
            if px[i + 3] == 0:
                continue
            r, g, b = px[i], px[i + 1], px[i + 2]
            chroma = max(r, g, b) - min(r, g, b)
            luma = (r * 299 + g * 587 + b * 114) // 1000
            if chroma < CHROMA_MAX and luma < LUMA_MAX:
                px[i] = px[i + 1] = px[i + 2] = 255
                changed += 1

    write_png_rgba(dst, w, h, px)
    total = w * h
    print(f'✓ {dst}  {w}x{h}  {dst.stat().st_size // 1024}KB'
          f'  ({changed} dari {total} piksel diputihkan)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
