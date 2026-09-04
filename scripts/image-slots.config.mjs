/**
 * ─────────────────────────────────────────────────────────────
 *  DAFTAR SLOT GAMBAR
 * ─────────────────────────────────────────────────────────────
 *
 * Satu slot = satu posisi gambar di situs. Tiap slot punya satu folder
 * sendiri di `public/images/slots/<slot>/`.
 *
 * Cara memakai (tanpa menyentuh kode):
 *   1. Buka folder slot yang ingin diganti gambarnya.
 *   2. Hapus file lama, taruh file baru. Namanya bebas.
 *   3. Selesai — `npm run dev` sudah memantau folder ini.
 *
 * Kalau foldernya kosong, situs memakai gambar placeholder.
 * Kalau isinya lebih dari satu file, yang dipakai file pertama menurut
 * urutan nama; sisanya diabaikan (dan diberitahukan saat sinkronisasi).
 *
 * `seed` hanya dipakai sekali, saat folder slot pertama kali dibuat, untuk
 * memindahkan gambar yang sudah terpasang sebelum sistem ini ada. Setelah
 * folder itu ada, `seed` tidak pernah disentuh lagi — mengosongkan folder
 * berarti Anda memang ingin placeholder.
 */
export const SLOTS = [
  // ── Beranda ──
  {
    slot: 'home_hero_dashboard',
    desc: 'Beranda — screenshot besar di dalam bingkai browser pada hero',
    seed: 'projects/d-ibs-dashboard.png',
  },

  // ── Halaman Solusi PDAM ──
  {
    slot: 'pdam_ibs_dashboard',
    desc: 'Solusi PDAM — dashboard D-IBS',
    seed: 'projects/d-ibs-dashboard.png',
  },
  {
    slot: 'pdam_asset_webgis',
    desc: 'Solusi PDAM — peta WebGIS D-ASSET',
    seed: 'projects/d-asset-webgis.png',
  },
  {
    slot: 'pdam_helios_monitoring',
    desc: 'Solusi PDAM — dashboard monitoring HELIOS',
    seed: 'projects/helios-dashboard.jpg',
  },

  // ── Tentang ──
  {
    slot: 'about_kantor',
    desc: 'Tentang — foto kantor pada bagian cerita perusahaan',
    seed: 'about/office.jpg',
  },

  // ── Halaman Akuntansi & Keuangan PDAM ──
  // Keempatnya belum ada bidikannya. Selama foldernya kosong, halaman
  // menampilkan penampung bergaris putus-putus berikut keterangan apa yang
  // seharusnya ada di situ — bukan gambar produk lain yang dipinjam.
  {
    slot: 'akuntansi_dashboard_rekonsiliasi',
    desc: 'Akuntansi PDAM — Dashboard Rekonsiliasi dengan panel Pratinjau posting terbuka',
  },
  {
    slot: 'akuntansi_panel_preflight',
    desc: 'Akuntansi PDAM — panel preflight yang menampilkan temuan pemblokir',
  },
  {
    slot: 'akuntansi_laporan_neraca',
    desc: 'Akuntansi PDAM — laporan Neraca dengan header dan baris Total yang beku saat digulir',
  },
  {
    slot: 'akuntansi_drawer_panduan',
    desc: 'Akuntansi PDAM — drawer panduan terbuka di atas layar modul',
  },

  // ── HELIOS — dokumentasi pemasangan di lapangan ──
  // Diambil dari galeri "Instalasi Lapangan" di iot.devetek.app/hardware.html,
  // lalu disalin ke sini supaya halaman ini tidak bergantung pada situs lain
  // tetap hidup — dan supaya fotonya bisa diganti tanpa menyentuh kode.
  { slot: 'helios_kegiatan_tiang_terpasang', desc: 'HELIOS — tiang monitoring terpasang lengkap dengan panel surya' },
  { slot: 'helios_kegiatan_lokasi_pdam', desc: 'HELIOS — node terpasang di lokasi PDAM' },
  { slot: 'helios_kegiatan_node_sensor', desc: 'HELIOS — node dengan rangkaian sensor lengkap' },
  { slot: 'helios_kegiatan_rakit_tiang', desc: 'HELIOS — perakitan tiang galvanis' },
  { slot: 'helios_kegiatan_bracket_panel', desc: 'HELIOS — pemasangan bracket panel surya' },
  { slot: 'helios_kegiatan_pondasi', desc: 'HELIOS — persiapan pondasi tiang' },
  { slot: 'helios_kegiatan_angkat_tiang', desc: 'HELIOS — pengangkatan dan pendirian tiang' },

  // ── Proyek (urutannya mengikuti PROJECTS di src/lib/constants.ts) ──
  { slot: 'proyek_pdam_ibs', desc: 'Proyek — Sistem PDAM Terintegrasi (D-IBS)', seed: 'projects/pdam-billing.png' },
  { slot: 'proyek_helios_dma', desc: 'Proyek — IoT Monitoring & DMA (HELIOS)', seed: 'projects/helios-dashboard.jpg' },
  { slot: 'proyek_baca_meter', desc: 'Proyek — Mobile Baca Meter PDAM', seed: 'projects/baca-meter-mobile.jpg' },
  { slot: 'proyek_amims', desc: 'Proyek — AMIMS Aircraft Maintenance', seed: 'projects/amims.png' },
  { slot: 'proyek_vms', desc: 'Proyek — VMS Vessel Monitoring System', seed: 'projects/vms.png' },
  { slot: 'proyek_sdkp', desc: 'Proyek — SDKP & SalmonTrack Mobile', seed: 'projects/sdkp.png' },
  { slot: 'proyek_bpbd', desc: 'Proyek — BPBD Sistem Informasi Kebencanaan', seed: 'projects/bpbd.png' },
  { slot: 'proyek_optimis', desc: 'Proyek — OPTIMIS Perizinan Online', seed: 'projects/optimis.png' },
  { slot: 'proyek_erp_rpn', desc: 'Proyek — ERP Custom Modular (PT RPN)', seed: 'projects/erp-illustration.jpg' },
  { slot: 'proyek_lap_app', desc: 'Proyek — LAP-APP Sertifikasi Lab', seed: 'projects/app-screenshot-1.png' },

  // ── Tim (dipakai TeamSection; slot tanpa foto menampilkan inisial) ──
  { slot: 'tim_muhammad_arifin', desc: 'Tim — Muhammad Arifin', seed: 'team/arifin.png' },
  { slot: 'tim_nedya_amrih_prakasa', desc: 'Tim — Nedya Amrih Prakasa', seed: 'team/raka.png' },
  { slot: 'tim_kusuma_indra_putra', desc: 'Tim — Kusuma Indra Putra', seed: 'team/kusuma.png' },
  { slot: 'tim_yasdiq_lubis', desc: 'Tim — Yasdiq Lubis', seed: 'team/yashdiq.png' },
  { slot: 'tim_fahmi_zulhasymi', desc: 'Tim — Fahmi Zulhasymi', seed: 'team/fahmi.jpg' },
  { slot: 'tim_muhammad_ilham', desc: 'Tim — Muhammad Ilham C.' },
  { slot: 'tim_muhammad_arifan', desc: 'Tim — Muhammad Arifan' },
  { slot: 'tim_randi_maizul', desc: 'Tim — Randi Maizul' },
  { slot: 'tim_robinaldi', desc: 'Tim — Robinaldi' },
  { slot: 'tim_rully_culit', desc: 'Tim — Rully Culit' },
]
