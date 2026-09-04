import { IMAGE_SLOTS, type ImageSlot } from './image-slots.generated'

export type { ImageSlot }

/**
 * Dipakai ketika folder slot masih kosong. Sengaja berupa gambar nyata,
 * bukan blok abu-abu kosong, supaya jelas bahwa yang kurang adalah
 * fotonya — bukan halamannya yang rusak.
 */
export const IMAGE_PLACEHOLDER = '/images/placeholder.svg'

/**
 * Alamat gambar untuk sebuah slot.
 *
 * Isi folder `public/images/slots/<slot>/` dibaca saat build dan saat dev
 * oleh `scripts/sync-image-slots.mjs`, lalu ditulis ke modul yang di-import
 * di atas. Nama file di dalam folder tidak perlu diatur — file pertama
 * menurut urutan nama yang dipakai.
 *
 * Situs ini di-export statis, jadi pembacaan folder memang tidak bisa
 * terjadi saat halaman dibuka. Yang tetap sama bagi pengisi konten:
 * taruh file, gambarnya berganti.
 */
export function slotImage(slot: ImageSlot): string {
  return IMAGE_SLOTS[slot] ?? IMAGE_PLACEHOLDER
}

/**
 * Sama seperti `slotImage`, tetapi mengembalikan `null` bila slotnya kosong.
 * Dipakai di tempat yang punya pengganti lebih baik daripada placeholder —
 * mis. foto tim, yang jatuh ke inisial nama.
 */
export function slotImageOrNull(slot: ImageSlot): string | null {
  return IMAGE_SLOTS[slot] ?? null
}
