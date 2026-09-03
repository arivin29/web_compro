# API Komponen

Semua diimpor dari `@/components/ui`. Props yang tidak disebut di sini
tidak ada — jangan mengarang.

---

## Struktur

### `<Container>`

| Prop | Nilai | Default |
|---|---|---|
| `width` | `default` (1280px) · `narrow` (56rem) · `prose` (68ch) | `default` |
| `as` | elemen HTML | `div` |
| `className` | tambahan | — |

Padding sudah termasuk: 20px mobile, 24px tablet, 32px desktop.

### `<Section>`

| Prop | Nilai | Default |
|---|---|---|
| `tone` | `page` · `white` · `soft` · `dark` · `dark-soft` | `white` |
| `space` | `none` · `compact` · `default` (64/80/96px) · `loose` | `default` |
| `width` | `default` · `narrow` · `prose` | `default` |
| `pattern` | `none` · `grid` · `dots` | `none` |
| `divider` | `none` · `top` · `signature-top` | `none` |
| `contained` | `false` bila section mengatur containernya sendiri | `true` |
| `id`, `className`, `containerClassName` | | — |

`tone="dark"` dan `dark-soft` otomatis menambahkan kelas `on-dark`, sehingga
`SectionHeading`, `Button`, `Card`, dan `link-inline` di dalamnya menyesuaikan
warna tanpa prop tambahan.

**Jangan** mengatur lebar lewat `containerClassName="max-w-…"` — pakai `width`.

### `<SectionHeading>`

| Prop | Nilai | Default |
|---|---|---|
| `label` | teks uppercase kecil di atas judul | — |
| `title` | ReactNode, wajib | — |
| `subtitle` | ReactNode | — |
| `align` | `left` · `center` | `left` |
| `as` | `h1` · `h2` · `h3` | `h2` |

Struktur tetap: diamond oranye → label → judul → deskripsi.
`align="center"` hanya untuk section yang benar-benar simetris.

### `<PageHero>`

| Prop | Tipe |
|---|---|
| `eyebrow` | `string` |
| `title` | `ReactNode`, wajib — jadi `<h1>` |
| `description` | `ReactNode` |
| `breadcrumb` | `{ label, href? }[]` — item terakhir tanpa `href` |
| `actions` | `ReactNode` — biasanya satu primary + satu secondary |
| `media` | `ReactNode` — kolom kanan, mis. `<BrowserFrame>` |

### `<CTABand>` / `<CTASection>`

`CTASection` adalah `CTABand` yang sudah diisi konten standar Devetek.
Halaman cukup memanggil `<CTASection />`. Pakai `CTABand` langsung hanya
bila butuh CTA dengan pesan berbeda.

| Prop `CTABand` | Tipe |
|---|---|
| `eyebrow` | `string` |
| `title` | `ReactNode`, wajib |
| `description` | `ReactNode` |
| `actions` | `ReactNode`, wajib |
| `aside` | `ReactNode` — kolom kanan |

---

## Aksi & status

### `<Button>`

| Prop | Nilai | Default |
|---|---|---|
| `variant` | `primary` · `secondary` · `ghost` · `whatsapp` | `primary` |
| `size` | `sm` (36px) · `default` (44px) · `lg` (52px) | `default` |
| `loading` | menampilkan spinner + menonaktifkan | `false` |
| `block` | selebar container | `false` |
| `href` | jadi `<Link>`; URL eksternal/mailto/tel jadi `<a>` | — |

Tanpa `href` merender `<button>` dan menerima seluruh props tombol biasa
(`type`, `onClick`, `disabled`, …).

- Maksimal **satu `primary`** per kelompok aksi.
- `whatsapp` hanya untuk tautan yang benar-benar membuka WhatsApp.
- Lihat aturan kontras di SKILL.md sebelum menimpa warnanya.

### `<Badge>`

| Prop | Nilai | Default |
|---|---|---|
| `variant` | `brand` · `featured` · `success` · `warning` · `neutral` · `inverse` | `brand` |
| `dot` | titik status kecil di depan teks | `false` |

`inverse` untuk badge di atas permukaan navy. Radius 4px, bukan pill.

---

## Card

### `<Card>` — baseline

| Prop | Nilai | Default |
|---|---|---|
| `tone` | `light` · `soft` · `dark` · `dark-soft` | `light` |
| `accent` | `none` · `brand` · `orange` · `blue` (garis pendek kiri atas) · `gradient` (garis penuh atas) | `none` |
| `interactive` | hover naik 4px + border biru | otomatis `true` bila ada `href` |
| `padding` | `none` · `sm` · `default` · `lg` | `default` |
| `href` | seluruh card jadi link | — |
| `as` | elemen bila bukan link | `div` |

Card unggulan dibedakan lewat `tone="dark"` atau `accent="gradient"`,
**bukan** radius lebih besar.

Card menerapkan kelas `group`, jadi anak-anaknya bisa memakai
`group-hover:` — dipakai `FeatureCard` untuk menggeser panah.

### `<FeatureCard>`

| Prop | Tipe |
|---|---|
| `icon` | `ReactNode` |
| `title` | `string`, wajib |
| `description` | `ReactNode`, wajib |
| `points` | `readonly string[]` — daftar poin dengan diamond oranye |
| `href` | membuat card jadi link + memunculkan tautan di kaki |
| `linkLabel` | teks tautan kaki (default `Selengkapnya`) |
| `children` | konten tambahan di bawah deskripsi, mis. daftar tag |
| `tone`, `accent`, `className` | diteruskan ke `Card` |

### `<ProjectCard>`

| Prop | Tipe |
|---|---|
| `image` | `string`, wajib — dirender rasio 16:10 |
| `title` | `string`, wajib |
| `category` | `string`, wajib — tampil sebagai `Badge` |
| `client` | `string` — isi hanya bila sudah ada izin publikasi |
| `impact` | `string` — hasil yang dapat diverifikasi |
| `href` | — |

### `<ProcessCard>`

| Prop | Tipe |
|---|---|
| `step` | `string`, mis. `'01'` |
| `title`, `description` | `string`, wajib |
| `icon` | `ReactNode` |
| `last` | `true` pada kartu terakhir agar garis penghubung disembunyikan |

### `<StatCard>`

| Prop | Tipe |
|---|---|
| `value` | `number`, wajib — dianimasikan `Counter` |
| `suffix` | `string`, mis. `'+'` |
| `label` | `string`, wajib |
| `note` | `string` — konteks atau sumber angka |
| `icon` | `ReactNode` |
| `accent` | `orange` · `blue` · `red` |
| `align` | `left` · `center` |

### `<TestimonialCard>`

| Prop | Tipe |
|---|---|
| `quote`, `name`, `role`, `company` | `string`, wajib |
| `highlights` | `{ value, label }[]` — angka pendukung yang dapat diverifikasi |

Jangan memakai nama atau jabatan placeholder di produksi.

### `<ContactRow>`

| Prop | Tipe |
|---|---|
| `icon` | `ReactNode`, wajib |
| `label` | `string`, wajib — tampil sebagai label uppercase kecil |
| `value` | `ReactNode`, wajib |
| `href` | membuat seluruh baris clickable |

---

## Form

### `<Field>`

Render-prop, supaya kontrolnya bebas:

```tsx
<Field label="Email" required error={errors.email} hint="Kami balas ke alamat ini">
  {({ id, describedBy, invalid }) => (
    <Input id={id} aria-describedby={describedBy} invalid={invalid} type="email" />
  )}
</Field>
```

| Prop | Tipe |
|---|---|
| `label` | `string`, wajib — selalu terlihat |
| `error` | `string` — dirender sebagai teks + `aria-describedby` |
| `hint` | `string` — disembunyikan saat ada error |
| `required` | menambahkan tanda `*` dan teks screen-reader |

### `<Input>` / `<Textarea>` / `<Select>`

Menerima seluruh props elemen aslinya, ditambah `invalid?: boolean`
(memerahkan border dan menyetel `aria-invalid`).
Tinggi minimum 44px, radius 6px, focus ring biru.

`<Select>` menerima `<option>` sebagai children dan sudah memakai panah
kustom, karena panah bawaan browser tidak bisa digaya.

---

## Identitas & dekorasi

### `<Logo>`

| Prop | Nilai | Default |
|---|---|---|
| `tone` | `light` · `dark` (untuk background navy) | `light` |
| `variant` | `full` (ikon + wordmark) · `mark` (ikon saja) | `full` |
| `href` | `null` untuk tanpa link | `/` |

Wordmark diketik dengan Outfit, bukan gambar — jadi versi terang/gelap
cukup berbeda warna teks.

### `<ForwardLayers>` / `<ForwardLayersOutline>`

| Prop | Nilai | Default |
|---|---|---|
| `tone` | `brand` (tiga warna logo) · `mono` (`currentColor`) | `brand` |
| `opacity` | `number` | `1` |

**Maksimal satu elemen Forward Layers yang dominan per viewport.**

### `<BrowserFrame>`

| Prop | Tipe |
|---|---|
| `src`, `alt` | `string`, wajib |
| `label` | teks address bar, mis. `'d-ibs.devetek.com'` |
| `ratio` | `16/10` · `16/9` · `4/3` |
| `priority` | `true` bila berada di atas lipatan |

---

## Motion

### `<Reveal>`

| Prop | Nilai | Default |
|---|---|---|
| `delay` | detik — stagger pakai `i * 0.08` | `0` |
| `direction` | `up` · `left` · `right` · `none` | `up` |

Menghormati `prefers-reduced-motion`: langsung tampil tanpa animasi.

### `<Counter>`

| Prop | Nilai | Default |
|---|---|---|
| `value` | `number`, wajib | — |
| `prefix`, `suffix` | `string` | `''` |
| `duration` | detik, dibatasi maksimal 1.8 | `1.5` |

Berjalan sekali saat masuk viewport. Angka memakai `font-variant-numeric:
tabular-nums` agar tidak bergoyang saat menghitung.
