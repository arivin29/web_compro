#!/usr/bin/env node
/**
 * ─────────────────────────────────────────────────────────────
 *  SINKRONISASI SLOT GAMBAR
 * ─────────────────────────────────────────────────────────────
 *
 * Website ini memakai `output: 'export'` — hasil akhirnya HTML statis di
 * Firebase Hosting, tanpa server yang bisa diminta membaca isi folder saat
 * halaman dibuka. Karena itu pembacaan folder dilakukan di sini, saat build
 * dan saat dev, lalu hasilnya ditulis menjadi satu modul TypeScript.
 *
 * Efeknya bagi pengisi konten sama seperti endpoint: taruh file di folder
 * slot, gambarnya berganti. Bedanya hanya waktu pembacaan.
 *
 * Jalankan:
 *   node scripts/sync-image-slots.mjs           sekali
 *   node scripts/sync-image-slots.mjs --watch   pantau perubahan (dipakai `npm run dev`)
 */
import { readdirSync, mkdirSync, existsSync, copyFileSync, writeFileSync, readFileSync, watch } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SLOTS } from './image-slots.config.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SLOTS_DIR = join(ROOT, 'public/images/slots')
const LEGACY_DIR = join(ROOT, 'public/images')
const OUT_FILE = join(ROOT, 'src/lib/image-slots.generated.ts')

/** Ekstensi yang dianggap gambar. Sisanya diabaikan diam-diam. */
const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg'])

const c = {
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
}

/**
 * Nama file bebas, jadi bisa mengandung spasi, tanda kurung, atau huruf
 * beraksen. Tiap segmen di-encode supaya URL-nya tetap sah di browser.
 */
function toUrl(slot, file) {
  return `/images/slots/${encodeURIComponent(slot)}/${encodeURIComponent(file)}`
}

/** Isi folder slot: file gambar saja, diurutkan agar hasilnya konsisten. */
function imagesIn(dir) {
  return readdirSync(dir)
    .filter((f) => !f.startsWith('.') && IMAGE_EXT.has(extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, 'id', { sensitivity: 'base' }))
}

function sync({ quiet = false } = {}) {
  mkdirSync(SLOTS_DIR, { recursive: true })

  const resolved = []
  const extras = []
  let seeded = 0
  let empty = 0

  for (const { slot, desc, seed } of SLOTS) {
    const dir = join(SLOTS_DIR, slot)
    const isNew = !existsSync(dir)

    if (isNew) {
      mkdirSync(dir, { recursive: true })
      // Pindahkan gambar yang sudah terpasang sebelum sistem slot ada,
      // supaya tampilan situs tidak berubah saat sistem ini dinyalakan.
      if (seed && existsSync(join(LEGACY_DIR, seed))) {
        copyFileSync(join(LEGACY_DIR, seed), join(dir, seed.split('/').pop()))
        seeded++
      }
    }

    // .gitkeep supaya folder kosong tetap ikut ter-commit dan tersedia
    // di mesin lain — tanpa ini folder slot kosong akan hilang dari git.
    const keep = join(dir, '.gitkeep')
    if (!existsSync(keep)) writeFileSync(keep, '')

    const files = imagesIn(dir)
    if (files.length === 0) empty++
    if (files.length > 1) extras.push({ slot, used: files[0], ignored: files.slice(1) })

    resolved.push({ slot, desc, url: files[0] ? toUrl(slot, files[0]) : null })
  }

  const body = resolved
    .map((r) => `  /** ${r.desc} */\n  ${r.slot}: ${r.url ? `'${r.url}'` : 'null'},`)
    .join('\n')

  const next = `// ⚠️ DIHASILKAN OTOMATIS — jangan diedit tangan.
// Sumber: scripts/image-slots.config.mjs + isi public/images/slots/
// Regenerasi: npm run images:sync
//
// Nilai null berarti folder slotnya kosong; helper di src/lib/images.ts
// yang memutuskan menggantinya dengan placeholder.

export const IMAGE_SLOTS = {
${body}
} as const

export type ImageSlot = keyof typeof IMAGE_SLOTS
`

  // Tulis hanya bila berubah — supaya watcher Next tidak ikut rebuild
  // setiap kali skrip ini jalan tanpa ada yang berganti.
  const prev = existsSync(OUT_FILE) ? readFileSync(OUT_FILE, 'utf8') : null
  const changed = prev !== next
  if (changed) writeFileSync(OUT_FILE, next)

  if (!quiet || changed) {
    const filled = resolved.length - empty
    console.log(
      `${c.green('✓')} slot gambar: ${filled}/${resolved.length} terisi` +
        (empty ? c.dim(`, ${empty} pakai placeholder`) : '') +
        (seeded ? c.dim(`, ${seeded} dipindahkan dari lokasi lama`) : '') +
        (changed ? '' : c.dim(' (tidak berubah)')),
    )
    for (const e of extras) {
      console.log(
        `${c.yellow('!')} ${e.slot}: ada ${e.ignored.length + 1} file, dipakai ${c.dim(e.used)} — sisanya diabaikan`,
      )
    }
  }

  return changed
}

sync()

if (process.argv.includes('--watch')) {
  console.log(c.dim(`  memantau public/images/slots — taruh file, halaman ikut berganti`))
  let timer = null
  watch(SLOTS_DIR, { recursive: true }, () => {
    // fs.watch menembakkan beberapa event untuk satu perubahan file;
    // debounce supaya modul hasilnya tidak ditulis berkali-kali.
    clearTimeout(timer)
    timer = setTimeout(() => sync({ quiet: true }), 200)
  })
}
