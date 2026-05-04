# Website Handoff Index

Dokumen ini adalah pintu masuk utama untuk handoff ke developer atau agency.

## Repository Structure

```text
/
├── README.md
└── docs/
	├── handoff/
	│   ├── project-brief.md
	│   ├── handoff-checklist.md
	│   ├── sitemap-roadmap.md
	│   ├── wireframe-layout.md
	│   ├── copy-deck.md
	│   ├── design-spec.md
	│   └── asset-inventory.md
	└── reference/
		├── persiapan-v2.md
		└── source-materials.md
```

## Naming Convention

- Semua dokumen aktif memakai `kebab-case`
- Dokumen handoff final/kerja ada di `docs/handoff/`
- Catatan mentah dan referensi tambahan ada di `docs/reference/`
- Root repo disimpan tetap ringan agar entry point jelas

## Handoff Status

- Package status: WORKING DRAFT
- Intended use: bahan diskusi, estimation, dan alignment awal
- Not yet safe for blind execution: masih ada item yang perlu approval dan verifikasi

## Project Brief Singkat

- Company: PT Comon Cipta Inovasi / Devetek
- Website type: company profile
- Primary goal: membangun kredibilitas perusahaan dan menjelaskan produk/layanan inti
- Target audience: PDAM, instansi pemerintah, BUMN/BUMD, dan perusahaan swasta
- Brand tone: modern, enterprise, trustworthy, technical
- Primary CTA: hubungi tim untuk diskusi kebutuhan atau demo

## Source Of Truth

| Dokumen | Status | Fungsi |
|---------|--------|--------|
| `docs/handoff/project-brief.md` | FINAL FOR HANDOFF | Ringkasan tujuan proyek, audience, tone, CTA, dan ruang lingkup launch |
| `docs/handoff/handoff-checklist.md` | FINAL FOR HANDOFF | PIC, open approvals, item belum final, dan prasyarat sebelum kickoff |
| `docs/handoff/sitemap-roadmap.md` | WORKING DRAFT | Struktur halaman, prioritas phase, dan roadmap delivery |
| `docs/handoff/wireframe-layout.md` | WORKING DRAFT | Struktur section per halaman dan asumsi layout |
| `docs/handoff/copy-deck.md` | WORKING DRAFT | Copy per halaman; item tertentu masih perlu verifikasi sebelum publish |
| `docs/handoff/design-spec.md` | WORKING DRAFT | Visual direction, UI spec, dan creative guardrails |
| `docs/handoff/asset-inventory.md` | WORKING DRAFT | Ketersediaan aset dan gap yang masih harus ditutup |
| `docs/reference/source-materials.md` | REFERENCE ONLY | Bahan mentah, bukan source of truth |
| `docs/reference/persiapan-v2.md` | REFERENCE ONLY | Catatan kerja dan referensi tambahan, bukan source of truth |

## Decision Rules

1. Jika ada konflik antar dokumen, gunakan urutan prioritas: `docs/handoff/project-brief.md` → `docs/handoff/handoff-checklist.md` → dokumen final kerja per topik.
2. `docs/reference/source-materials.md` dan `docs/reference/persiapan-v2.md` tidak boleh dijadikan dasar publish tanpa dipindahkan dulu ke dokumen kerja utama.
3. Semua placeholder `[___]`, klaim tanpa verifikasi, dan aset berstatus pending dianggap belum boleh tayang publik.
4. Roadmap dan rekomendasi teknis adalah usulan implementasi, bukan scope final, kecuali sudah dinyatakan sebagai `P0`.

## Launch Scope

| Priority | Halaman / Feature |
|----------|-------------------|
| P0 | Home, About, Products, detail produk inti, Contact, legal minimum |
| P1 | Portfolio, Clients, testimonial tambahan, coverage map |
| P2 | Blog, multi-bahasa, CMS penuh, animasi non-esensial |

## Open Items Sebelum Eksekusi Penuh

- Finalisasi klaim angka: pengalaman, jumlah klien, jumlah proyek, jangkauan benua
- Verifikasi klaim ekspansi Eropa dan struktur entitas CCI / DMI / Devetek
- Konfirmasi testimonial dan daftar klien yang boleh ditampilkan publik
- Lengkapi screenshot terbaru untuk D-IBS dan D-ASSET
- Tetapkan PIC approval untuk copy, design, asset, dan legal

## Cara Pakai Repo Ini

1. Baca `docs/handoff/project-brief.md` untuk memahami tujuan dan batas phase 1.
2. Gunakan `docs/handoff/sitemap-roadmap.md` dan `docs/handoff/wireframe-layout.md` untuk memetakan struktur halaman.
3. Gunakan `docs/handoff/copy-deck.md` hanya untuk blok copy yang sudah clear dari catatan verifikasi.
4. Gunakan `docs/handoff/design-spec.md` bersama referensi visual dan guardrails yang ada di dalamnya.
5. Cek `docs/handoff/asset-inventory.md` dan `docs/handoff/handoff-checklist.md` sebelum kickoff produksi.