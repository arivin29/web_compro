// ⚠️ DIHASILKAN OTOMATIS — jangan diedit tangan.
// Sumber: scripts/image-slots.config.mjs + isi public/images/slots/
// Regenerasi: npm run images:sync
//
// Nilai null berarti folder slotnya kosong; helper di src/lib/images.ts
// yang memutuskan menggantinya dengan placeholder.

export const IMAGE_SLOTS = {
  /** Beranda — screenshot besar di dalam bingkai browser pada hero */
  home_hero_dashboard: '/images/slots/home_hero_dashboard/d-ibs-dashboard.png',
  /** Solusi PDAM — dashboard D-IBS */
  pdam_ibs_dashboard: '/images/slots/pdam_ibs_dashboard/d-ibs-dashboard.png',
  /** Solusi PDAM — peta WebGIS D-ASSET */
  pdam_asset_webgis: '/images/slots/pdam_asset_webgis/d-asset-webgis.png',
  /** Solusi PDAM — dashboard monitoring HELIOS */
  pdam_helios_monitoring: '/images/slots/pdam_helios_monitoring/helios-dashboard.jpg',
  /** Tentang — foto kantor pada bagian cerita perusahaan */
  about_kantor: '/images/slots/about_kantor/office.jpg',
  /** Akuntansi PDAM — Dashboard Rekonsiliasi dengan panel Pratinjau posting terbuka */
  akuntansi_dashboard_rekonsiliasi: '/images/slots/akuntansi_dashboard_rekonsiliasi/Screenshot%202026-09-04%20at%2007.37.14.png',
  /** Akuntansi PDAM — panel preflight yang menampilkan temuan pemblokir */
  akuntansi_panel_preflight: '/images/slots/akuntansi_panel_preflight/Screenshot%202026-09-04%20at%2007.36.00.png',
  /** Akuntansi PDAM — laporan Neraca dengan header dan baris Total yang beku saat digulir */
  akuntansi_laporan_neraca: '/images/slots/akuntansi_laporan_neraca/Screenshot%202026-09-04%20at%2007.36.28.png',
  /** Akuntansi PDAM — drawer panduan terbuka di atas layar modul */
  akuntansi_drawer_panduan: '/images/slots/akuntansi_drawer_panduan/Screenshot%202026-09-04%20at%2007.42.51.png',
  /** HELIOS — tiang monitoring terpasang lengkap dengan panel surya */
  helios_kegiatan_tiang_terpasang: '/images/slots/helios_kegiatan_tiang_terpasang/terpasang-1.jpg',
  /** HELIOS — node terpasang di lokasi PDAM */
  helios_kegiatan_lokasi_pdam: '/images/slots/helios_kegiatan_lokasi_pdam/terpasang-2.jpg',
  /** HELIOS — node dengan rangkaian sensor lengkap */
  helios_kegiatan_node_sensor: '/images/slots/helios_kegiatan_node_sensor/terpasang-3.jpg',
  /** HELIOS — perakitan tiang galvanis */
  helios_kegiatan_rakit_tiang: '/images/slots/helios_kegiatan_rakit_tiang/rakit-tiang-1.jpg',
  /** HELIOS — pemasangan bracket panel surya */
  helios_kegiatan_bracket_panel: '/images/slots/helios_kegiatan_bracket_panel/rakit-tiang-2.jpg',
  /** HELIOS — persiapan pondasi tiang */
  helios_kegiatan_pondasi: '/images/slots/helios_kegiatan_pondasi/pasang-tiang-1.jpg',
  /** HELIOS — pengangkatan dan pendirian tiang */
  helios_kegiatan_angkat_tiang: '/images/slots/helios_kegiatan_angkat_tiang/pasang-tiang-2.jpg',
  /** Proyek — Sistem PDAM Terintegrasi (D-IBS) */
  proyek_pdam_ibs: '/images/slots/proyek_pdam_ibs/pdam-billing.png',
  /** Proyek — IoT Monitoring & DMA (HELIOS) */
  proyek_helios_dma: '/images/slots/proyek_helios_dma/helios-dashboard.jpg',
  /** Proyek — Mobile Baca Meter PDAM */
  proyek_baca_meter: '/images/slots/proyek_baca_meter/baca-meter-mobile.jpg',
  /** Proyek — AMIMS Aircraft Maintenance */
  proyek_amims: '/images/slots/proyek_amims/amims.png',
  /** Proyek — VMS Vessel Monitoring System */
  proyek_vms: '/images/slots/proyek_vms/vms.png',
  /** Proyek — SDKP & SalmonTrack Mobile */
  proyek_sdkp: '/images/slots/proyek_sdkp/sdkp.png',
  /** Proyek — BPBD Sistem Informasi Kebencanaan */
  proyek_bpbd: '/images/slots/proyek_bpbd/bpbd.png',
  /** Proyek — OPTIMIS Perizinan Online */
  proyek_optimis: '/images/slots/proyek_optimis/optimis.png',
  /** Proyek — ERP Custom Modular (PT RPN) */
  proyek_erp_rpn: '/images/slots/proyek_erp_rpn/erp-illustration.jpg',
  /** Proyek — LAP-APP Sertifikasi Lab */
  proyek_lap_app: '/images/slots/proyek_lap_app/app-screenshot-1.png',
  /** Tim — Muhammad Arifin */
  tim_muhammad_arifin: '/images/slots/tim_muhammad_arifin/arifin.png',
  /** Tim — Nedya Amrih Prakasa */
  tim_nedya_amrih_prakasa: '/images/slots/tim_nedya_amrih_prakasa/raka.png',
  /** Tim — Kusuma Indra Putra */
  tim_kusuma_indra_putra: '/images/slots/tim_kusuma_indra_putra/kusuma.png',
  /** Tim — Yasdiq Lubis */
  tim_yasdiq_lubis: '/images/slots/tim_yasdiq_lubis/yashdiq.png',
  /** Tim — Fahmi Zulhasymi */
  tim_fahmi_zulhasymi: '/images/slots/tim_fahmi_zulhasymi/fahmi.jpg',
  /** Tim — Muhammad Ilham C. */
  tim_muhammad_ilham: null,
  /** Tim — Muhammad Arifan */
  tim_muhammad_arifan: null,
  /** Tim — Randi Maizul */
  tim_randi_maizul: null,
  /** Tim — Robinaldi */
  tim_robinaldi: null,
  /** Tim — Rully Culit */
  tim_rully_culit: null,
} as const

export type ImageSlot = keyof typeof IMAGE_SLOTS
