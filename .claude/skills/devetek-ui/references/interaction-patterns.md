# Pola Interaksi

Perilaku yang sudah dipakai di situs ini. Salin polanya, jangan menemukan
ulang — terutama bagian keyboard dan ARIA-nya, karena itu yang paling
sering terlewat.

Semua pola di bawah sudah diverifikasi terhadap checklist aksesibilitas
pada SKILL.md §6.

---

## Dropdown (menu produk)

Referensi kerja: `src/components/layout/Navbar.tsx`.

Yang wajib ada:

- Pemicunya `<button>`, bukan `<div>` — supaya bisa di-Tab dan di-Enter.
- `aria-expanded={open}` dan `aria-haspopup="true"`.
- Buka saat hover **dan** saat klik/Enter.
- Tutup saat: klik di luar, `Escape`, dan perpindahan route.
- Jeda ~140ms sebelum menutup pada `mouseleave`, supaya kursor sempat
  bergerak dari pemicu ke panel.

```tsx
const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

const open = useCallback(() => {
  if (closeTimer.current) clearTimeout(closeTimer.current)
  setOpen(true)
}, [])

const scheduleClose = useCallback(() => {
  if (closeTimer.current) clearTimeout(closeTimer.current)
  closeTimer.current = setTimeout(() => setOpen(false), 140)
}, [])

useEffect(() => {
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
  document.addEventListener('keydown', onKey)
  return () => document.removeEventListener('keydown', onKey)
}, [])
```

Panel memakai `bg-surface-dark`, `rounded-lg`, `shadow-dropdown`, dan setiap
item berisi ikon + nama + deskripsi pendek.

---

## Drawer mobile

Referensi kerja: `src/components/layout/Navbar.tsx`.

Yang wajib ada:

- **Kunci scroll body** selama drawer terbuka, lalu kembalikan nilai semula:

```tsx
useEffect(() => {
  if (!open) return
  const prev = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  return () => { document.body.style.overflow = prev }
}, [open])
```

- Tombol toggle punya `aria-expanded`, `aria-controls`, dan `aria-label`
  yang berubah ("Buka menu" / "Tutup menu").
- Drawer menutup otomatis saat route berubah.
- CTA diletakkan **setelah** seluruh menu, bukan di atas.
- Tinggi drawer `top-[var(--header-h)] bottom-0` dengan `overflow-y-auto`,
  supaya menu panjang tetap bisa digulir.

---

## Accordion (FAQ, kelompok modul)

```tsx
const [openId, setOpenId] = useState<string | null>(null)

{FAQ.map((item) => {
  const open = openId === item.q
  return (
    <div key={item.q} className="border-b border-border last:border-0">
      <h3>
        <button
          type="button"
          onClick={() => setOpenId(open ? null : item.q)}
          aria-expanded={open}
          aria-controls={`faq-${item.id}`}
          className="tap-target flex w-full items-center justify-between gap-4 py-4 text-left"
        >
          <span className="font-heading text-h4 font-semibold text-text-primary">{item.q}</span>
          <CaretDown
            size={16} weight="bold" aria-hidden
            className={`shrink-0 text-brand-blue-strong transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <div id={`faq-${item.id}`} hidden={!open}>
        <p className="measure pb-5 font-body leading-relaxed text-text-secondary">{item.a}</p>
      </div>
    </div>
  )
})}
```

Catatan:

- Tombol dibungkus heading (`<h3>`) supaya pengguna screen reader bisa
  menavigasi FAQ lewat daftar heading.
- Pakai atribut `hidden`, bukan `display:none` lewat class — konten yang
  tersembunyi tidak boleh bisa di-Tab.
- Ikon caret `aria-hidden`; statusnya sudah disampaikan `aria-expanded`.

---

## Filter / tab kategori

```tsx
<div role="radiogroup" aria-label="Saring berdasarkan sektor">
  {CATEGORIES.map((c) => (
    <button key={c} role="radio" aria-checked={filter === c} onClick={() => setFilter(c)}>
      {c}
    </button>
  ))}
</div>

<p aria-live="polite">Menampilkan {shown.length} proyek</p>
```

- Filter aktif ditandai **border + background + bobot teks**, bukan warna saja
  (blueprint §16: informasi tidak boleh disampaikan hanya lewat warna).
- Jumlah hasil diumumkan lewat `aria-live="polite"`.
- Chip filter memakai `rounded-sm`, bukan pill.
- Sediakan opsi "Semua" sebagai keadaan awal.

---

## Form dengan validasi

```tsx
const [errors, setErrors] = useState<Record<string, string>>({})
const [sending, setSending] = useState(false)

function validate(data: FormData) {
  const e: Record<string, string> = {}
  if (!data.get('nama')) e.nama = 'Nama wajib diisi.'
  const email = String(data.get('email') ?? '')
  if (!email) e.email = 'Email wajib diisi.'
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Format email belum benar.'
  return e
}

async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
  ev.preventDefault()
  const data = new FormData(ev.currentTarget)
  const e = validate(data)
  setErrors(e)
  if (Object.keys(e).length) {
    // Pindahkan fokus ke field bermasalah pertama
    document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
    return
  }
  setSending(true)
  try { /* kirim */ } finally { setSending(false) }
}
```

Aturan:

- `noValidate` pada `<form>` supaya pesan error kita yang dipakai, bukan
  pesan bawaan browser yang tidak bisa digaya dan tidak berbahasa Indonesia.
- Error tampil sebagai **teks** di bawah field, terhubung lewat
  `aria-describedby` — bukan hanya border merah.
- Fokus dipindahkan ke field bermasalah pertama setelah submit gagal.
- Tombol submit memakai `loading` (`<Button loading={sending}>`).
- Success state **menyediakan langkah berikutnya**, bukan sekadar
  "Terima kasih" — mis. tautan WhatsApp untuk yang butuh cepat.

---

## Animasi masuk viewport

Pakai `<Reveal>`. Jangan menulis `useInView` sendiri.

```tsx
{items.map((item, i) => (
  <Reveal key={item.id} delay={i * 0.08}>
    <FeatureCard {...item} />
  </Reveal>
))}
```

Bila benar-benar butuh animasi Framer Motion khusus, **wajib** memanggil
`useReducedMotion()` dan menyediakan jalur tanpa animasi:

```tsx
const reduce = useReducedMotion()
const rise = (delay: number) =>
  reduce ? {} : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  }
```

---

## Peta (embed)

- Diperlakukan sebagai konten pendukung, diletakkan **setelah** informasi
  kontak utama.
- Radius dan border sama dengan card (`rounded-lg border border-border`).
- `loading="lazy"` dan `title` yang bermakna pada `<iframe>`.
- Sediakan alamat sebagai teks di dekatnya, sebagai fallback bila iframe
  gagal dimuat atau diblokir.

---

## Ikon

Satu keluarga: **Phosphor**. Ukuran 16 / 20 / 24 / 32.

- Client Component: `import { Drop } from '@phosphor-icons/react'`
- Server Component: `import { Drop } from '@phosphor-icons/react/dist/ssr'`

Untuk memetakan nama ikon dari data ke komponen, pakai `Record<string, Icon>`
dengan fallback — jangan indeks langsung:

```tsx
import { Drop, type Icon } from '@phosphor-icons/react'

const ICONS: Record<string, Icon> = { Drop, WifiHigh, GearSix }
const ItemIcon = ICONS[item.icon] ?? Drop
```
