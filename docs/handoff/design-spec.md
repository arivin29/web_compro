# Design Spec & Style Guide

> Status: WORKING DRAFT
> Fungsi: panduan visual dan UI untuk design/development.
> Catatan: dokumen ini sekarang sudah cukup kuat sebagai style guide, tetapi masih perlu guardrail kreatif agar agency tidak menafsirkan visual terlalu jauh.

## Brand Direction

- Personality: modern, enterprise, trustworthy, technical
- Mood: premium, fokus, rapi, tidak playful
- Tone visual: corporate terang dengan basis putih-biru, formal, bersih, dan aman untuk company profile
- Core principle: trust-building lebih penting daripada efek visual yang ramai

## Creative Guardrails

### Do

- Gunakan layout yang bersih, mudah dibaca, dan terasa premium
- Tunjukkan produk, dashboard, implementasi lapangan, dan bukti kerja nyata
- Gunakan surface putih, panel abu-biru muda, dan border halus untuk membangun kesan enterprise
- Prioritaskan hierarchy teks dan CTA yang jelas

### Don't

- Jangan membuat UI terlalu neon, terlalu gaming, atau terlalu futuristik berlebihan
- Jangan memakai ilustrasi kartun atau visual yang terasa startup-anak-muda
- Jangan menumpuk animasi sampai mengganggu kredibilitas atau keterbacaan
- Jangan memakai hero visual yang generik jika ada screenshot produk atau dokumentasi lapangan yang lebih kuat

---

## 1. COLOR PALETTE

### Primary Colors
```
Background Primary   : #F7FAFC  (off-white — main bg)
Background Secondary : #EEF3F8  (soft blue-gray — section alt)
Background Card      : #FFFFFF  (card, modal, dropdown)
Background Hover     : #F2F6FB  (card hover state)
Border               : #D7E1EC  (subtle cool border)
```

### Accent Colors
```
Accent Primary       : #5E8FC8  (brand blue — CTA, links, highlights)
Accent Hover         : #3F6FA8  (deeper blue — hover state)
Accent Soft          : #8FB4DE  (light blue — subtle highlights)
Accent Secondary     : #FF6A2A  (warm accent — badge, key emphasis)
Accent Strong        : #FF3B1F  (limited high-attention use)
Accent Gradient      : linear-gradient(135deg, #5E8FC8, #7AA7D6)
```

### Text Colors
```
Text Primary         : #16202E  (headings, important text)
Text Secondary       : #526274  (body text, descriptions)
Text Muted           : #74839A  (labels, captions, meta)
Text Accent          : #5E8FC8  (links, highlights)
```

### Semantic Colors
```
Success              : #22C55E
Warning              : #F59E0B
Error                : #EF4444
Info                 : #3B82F6
```

### Tailwind Config (mapping)
```js
colors: {
  bg: {
    primary: '#F7FAFC',
    secondary: '#EEF3F8',
    card: '#FFFFFF',
    hover: '#F2F6FB',
  },
  accent: {
    DEFAULT: '#5E8FC8',
    hover: '#3F6FA8',
    soft: '#8FB4DE',
    secondary: '#FF6A2A',
    strong: '#FF3B1F',
  },
  border: '#D7E1EC',
  text: {
    primary: '#16202E',
    secondary: '#526274',
    muted: '#74839A',
  },
}
```

---

## 2. TYPOGRAPHY

### Font Family
```
Heading  : 'Plus Jakarta Sans', sans-serif  (Google Fonts)
Body     : 'Inter', sans-serif              (Google Fonts)
Mono     : 'JetBrains Mono', monospace      (opsional, untuk code/data)
```

### Font Scale

| Element | Size (desktop) | Size (mobile) | Weight | Line Height | Font |
|---------|---------------|---------------|--------|-------------|------|
| H1 | 56px / 3.5rem | 36px / 2.25rem | 800 | 1.1 | Plus Jakarta Sans |
| H2 | 40px / 2.5rem | 28px / 1.75rem | 700 | 1.2 | Plus Jakarta Sans |
| H3 | 28px / 1.75rem | 22px / 1.375rem | 700 | 1.3 | Plus Jakarta Sans |
| H4 | 22px / 1.375rem | 18px / 1.125rem | 600 | 1.4 | Plus Jakarta Sans |
| Body Large | 18px / 1.125rem | 16px / 1rem | 400 | 1.7 | Inter |
| Body | 16px / 1rem | 15px | 400 | 1.7 | Inter |
| Body Small | 14px / 0.875rem | 13px | 400 | 1.6 | Inter |
| Caption | 12px / 0.75rem | 12px | 500 | 1.5 | Inter |
| Label/Badge | 12px / 0.75rem | 11px | 600 | 1 | Inter |

### Letter Spacing
```
Headings : -0.02em (tight)
Body     : 0 (normal)
Labels   : 0.05em (wide, uppercase)
```

---

## 3. SPACING SYSTEM

Base unit: 4px

```
xs   : 4px   (0.25rem)
sm   : 8px   (0.5rem)
md   : 16px  (1rem)
lg   : 24px  (1.5rem)
xl   : 32px  (2rem)
2xl  : 48px  (3rem)
3xl  : 64px  (4rem)
4xl  : 96px  (6rem)
5xl  : 128px (8rem)
```

### Section Padding
```
Section vertical padding  : 96px (desktop) / 64px (mobile)
Container max-width       : 1280px
Container padding-x       : 24px (mobile) / 32px (tablet) / 0 (desktop, centered)
```

---

## 4. BORDER RADIUS

```
Small (badges, tags)    : 6px   (rounded-md)
Medium (cards, inputs)  : 12px  (rounded-xl)
Large (modals, sections): 16px  (rounded-2xl)
Full (avatars, pills)   : 9999px (rounded-full)
```

---

## 5. SHADOWS & EFFECTS

### Box Shadows (light corporate — subtle)
```
Card       : 0 8px 24px rgba(22, 32, 46, 0.06)
Card Hover : 0 14px 32px rgba(22, 32, 46, 0.10)
Dropdown   : 0 16px 40px rgba(22, 32, 46, 0.12)
```

### Surface Treatment (untuk cards premium)
```css
.surface-premium {
  background: #FFFFFF;
  border: 1px solid #D7E1EC;
  box-shadow: 0 12px 32px rgba(22, 32, 46, 0.08);
}
```

### Accent Treatment (accent elements)
```css
.glow {
  box-shadow: 0 8px 24px rgba(94, 143, 200, 0.18);
}
.glow-strong {
  box-shadow: 0 10px 28px rgba(255, 106, 42, 0.18);
}
```

---

## 6. ANIMASI & TRANSISI

### Scroll Reveal (Framer Motion)
```js
// Default entrance animation
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Stagger children
const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}
```

### Counter Animation
- Trigger: on scroll into viewport
- Duration: 2 seconds
- Easing: easeOut
- Format: number + suffix (12+, 50+, 100+)

### Hover Effects
```css
/* Card hover */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(22, 32, 46, 0.10);
  border-color: rgba(94, 143, 200, 0.35);
  transition: all 0.3s ease;
}

/* Button hover */
.btn-primary:hover {
  background: #3F6FA8;
  box-shadow: 0 10px 24px rgba(94, 143, 200, 0.22);
  transition: all 0.2s ease;
}

/* Logo grayscale → color */
.client-logo {
  filter: grayscale(100%) opacity(0.7);
  transition: all 0.3s ease;
}
.client-logo:hover {
  filter: grayscale(0%) opacity(1);
}
```

### Page Transitions
- Type: Fade + slide (subtle)
- Duration: 300ms
- Easing: easeInOut

---

## 7. KOMPONEN UI

### Buttons

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | accent gradient | white | none | darker blue + soft shadow |
| Secondary | white | accent | 1px border | bg secondary/40% |
| Ghost | transparent | text-secondary | none | bg primary/80% |

```
Padding   : 12px 24px (md) / 16px 32px (lg)
Font      : 14px / 16px, weight 600
Radius    : 12px
Min-width : 120px
```

### Cards
```
Background  : bg-card (#FFFFFF)
Border      : 1px solid #D7E1EC
Radius      : 16px
Padding     : 24px (md) / 32px (lg)
Hover       : translateY(-4px) + soft blue border emphasis
```

### Input Fields
```
Background  : #FFFFFF
Border      : 1px solid #D7E1EC
Radius      : 12px
Padding     : 12px 16px
Focus       : border-color: #5E8FC8 + subtle shadow
Text        : #16202E
Placeholder : #74839A
```

### Badges / Tags
```
Background  : rgba(94, 143, 200, 0.12)
Text        : #3F6FA8
Padding     : 4px 12px
Radius      : 6px
Font        : 12px, weight 600
```

### Navigation
```
Header height     : 72px
Header bg          : rgba(255, 255, 255, 0.92) + backdrop-blur(12px)
Header border-bottom : 1px solid rgba(215, 225, 236, 0.9)
Active link        : accent color + underline
Mobile breakpoint  : 768px (hamburger)
```

---

## 8. BREAKPOINTS

```
Mobile     : < 640px   (sm)
Tablet     : 640-1024px (md/lg)
Desktop    : > 1024px  (xl)
Wide       : > 1280px  (2xl)
```

### Grid Behavior

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Product cards | 3 col | 2 col | 1 col |
| Counter | 4 col | 2 col | 2 col |
| Team | 4-5 col | 3 col | 2 col |
| Portfolio | 3 col | 2 col | 1 col |
| Contact (form+info) | 2 col | 1 col | 1 col |

---

## 9. ICON SET

**Rekomendasi:** Lucide Icons (https://lucide.dev/)
- Style: Stroke, 24px default, stroke-width 1.5
- Color: inherit (text-secondary default, accent on hover)

| Kebutuhan | Icon Name (Lucide) |
|-----------|-------------------|
| PDAM/Air | Droplets |
| Map/GIS | Map, MapPin |
| IoT/Sensor | Radio, Wifi, Signal |
| ERP | Settings, LayoutDashboard |
| Code/Dev | Code, Laptop |
| Konsultasi | Handshake, Users |
| Email | Mail |
| Phone | Phone |
| WhatsApp | MessageCircle (atau custom SVG) |
| Location | MapPin |
| Arrow | ArrowRight, ChevronRight |
| Check | Check, CheckCircle |
| Clock/Time | Clock |
| Shield/Security | Shield, Lock |

---

## 10. IMAGE GUIDELINES

### Optimasi
- Format: WebP (with JPG/PNG fallback)
- Max width: 1920px untuk hero/full-width
- Max width: 800px untuk card thumbnails
- Quality: 80% (WebP), 85% (JPG)
- Lazy loading: semua kecuali hero & above-fold

### Aspect Ratios
```
Hero           : 16:9 atau free-form
Product card   : 16:9 (thumbnail)
Team photo     : 1:1 (square, 400x400)
Client logo    : Free (max 160px wide, center-aligned)
Portfolio      : 4:3 (thumbnail)
Blog           : 16:9 (featured image)
```

### Screenshot Mockups
- Wrap screenshot dalam device mockup (laptop/tablet/phone)
- Drop shadow pada mockup
- Slight 3D perspective opsional

---

## 11. VISUAL REFERENCES

Tambahkan 3-5 website acuan sebelum masuk fase desain final. Format yang disarankan:

| Reference | Yang Diambil | Yang Dihindari |
|-----------|--------------|----------------|
| Ref 1 | Hero structure, density, CTA hierarchy | Jangan copy identitas visual mentah |
| Ref 2 | Card treatment, use of product screenshot | Hindari layout yang terlalu padat |
| Ref 3 | Enterprise trust cues, case study presentation | Hindari terlalu corporate kaku |

## 12. PHOTOGRAPHY & ILLUSTRATION DIRECTION

### Photography

- Prioritaskan foto tim, kantor, implementasi lapangan, dan dashboard produk
- Pilih foto yang terasa profesional dan aktual, bukan stok generik
- Gunakan cropping yang konsisten dan latar yang tidak terlalu ramai

### Illustration

- Minimal, teknikal, diagrammatic
- Cocok untuk ekosistem produk, workflow, dan coverage map
- Hindari ilustrasi karakter, kartun, atau gaya yang terlalu dekoratif

## 13. PRIORITY COMPONENTS

Komponen yang harus dikunci lebih dulu sebelum eksplorasi detail lain:

1. Header / navigation
2. Hero section
3. Product card
4. CTA section
5. Contact form
6. Logo grid / trust section
