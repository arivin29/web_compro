import type { Config } from 'tailwindcss'

/**
 * ─────────────────────────────────────────────────────────────
 *  DEVETEK FORWARD — DESIGN TOKENS
 *  Acuan: docs/handoff/style-reconstruction-blueprint.md
 *  Panduan pakai: .claude/skills/devetek-ui/SKILL.md
 * ─────────────────────────────────────────────────────────────
 *
 *  Warna merek diekstrak langsung dari logo master
 *  (public/images/logo/devetek-lockup.png), sesuai catatan
 *  blueprint §3.1 bahwa nilai RGB final harus diverifikasi dari logo.
 *
 *  Seluruh pasangan warna teks/background sudah diverifikasi WCAG AA.
 *  Aturan yang TIDAK boleh dilanggar:
 *   - Teks putih di atas `brand-orange` GAGAL AA (2.98:1).
 *     CTA oranye selalu memakai label navy (5.87:1).
 *   - Untuk teks/link biru di permukaan terang pakai `brand-blue-strong`,
 *     bukan `brand-blue` (yang untuk fill, ikon, dan dekorasi).
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* ── Palette inti (dari logo) ── */
          red: '#E5301E',
          'red-strong': '#C7291A', // dipakai bila butuh teks putih di atasnya
          orange: '#F0701F',
          'orange-hover': '#D8620F',
          // Teks oranye di permukaan terang. `brand-orange` hanya 2.98:1 di
          // atas putih — gagal AA — jadi label dan penanda memakai varian ini
          // (5.80:1 di atas putih, 5.34:1 di atas `orange-pale`).
          'orange-ink': '#A8490B',
          // Permukaan oranye pucat yang OPAK. Dibutuhkan karena
          // `bg-brand-orange/[0.04]` tembus pandang: elemen dekoratif di
          // belakang kartu — mis. garis alur — ikut terlihat menembusnya.
          'orange-pale': '#FDF4EC',
          blue: '#4479B3', // fill, ikon, dekorasi
          'blue-strong': '#356399', // teks & link di permukaan terang (AA)
          'blue-soft': '#7FB0E6', // teks & link di permukaan gelap (AA)
          navy: '#101A28',
          'navy-soft': '#17273A',
          'navy-line': '#1D4E7C',
        },

        accent: {
          DEFAULT: '#356399',
          hover: '#4479B3',
          light: '#E9F0F8',
        },

        surface: {
          DEFAULT: '#FFFFFF',
          page: '#F6F8FB',
          white: '#FFFFFF',
          soft: '#EEF3F8',
          dark: '#101A28',
          'dark-soft': '#17273A',
        },

        border: {
          DEFAULT: '#DCE4EC',
          strong: '#C6D3E0',
          dark: 'rgba(255,255,255,0.12)',
        },

        text: {
          primary: '#101A28',
          secondary: '#526276',
          muted: '#61707F',
          inverse: '#FFFFFF',
          'inverse-muted': '#AAB7C6',
        },

        state: {
          success: '#1F9D62',
          // Varian gelap untuk teks di atas success-soft (AA terpenuhi)
          'success-strong': '#136F45',
          'success-soft': '#E6F5EE',
          warning: '#D97706',
          'warning-soft': '#FDF3E4',
          error: '#D9363E',
          'error-soft': '#FDECEC',
          info: '#356399',
          'info-soft': '#E9F0F8',
        },
      },

      fontFamily: {
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },

      /**
       * Skala tipografi — blueprint §4.2.
       * Nilai clamp() supaya mobile→desktop mulus tanpa breakpoint manual.
       */
      fontSize: {
        display: ['clamp(2.375rem, 1.4rem + 4.2vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        h1: ['clamp(2.125rem, 1.35rem + 3.3vw, 3.25rem)', { lineHeight: '1.10', letterSpacing: '-0.03em' }],
        h2: ['clamp(1.75rem, 1.3rem + 1.9vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        h3: ['clamp(1.1875rem, 1.13rem + 0.25vw, 1.375rem)', { lineHeight: '1.30', letterSpacing: '-0.02em' }],
        h4: ['clamp(1rem, 0.97rem + 0.13vw, 1.0625rem)', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
        'body-lg': ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.70' }],
        body: ['clamp(0.9375rem, 0.92rem + 0.13vw, 1rem)', { lineHeight: '1.70' }],
        'body-sm': ['clamp(0.8125rem, 0.79rem + 0.13vw, 0.875rem)', { lineHeight: '1.60' }],
        label: ['clamp(0.6875rem, 0.67rem + 0.06vw, 0.75rem)', { lineHeight: '1.30', letterSpacing: '0.14em' }],
      },

      /**
       * Radius — blueprint §6.1. Bentuk Devetek tegas & geometris,
       * radius normal maksimal 8px. Skala Tailwind sengaja di-clamp
       * supaya `rounded-xl`/`rounded-2xl` di halaman lama tidak lagi
       * menghasilkan sudut 12–16px.
       */
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '6px',
        lg: '8px',
        xl: '8px',
        '2xl': '8px',
        '3xl': '8px',
        full: '9999px',
      },

      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #F0701F 0%, #E5301E 100%)',
        'gradient-hero': 'linear-gradient(125deg, #101A28 0%, #17273A 58%, #1D4E7C 100%)',
        'gradient-feature': 'linear-gradient(120deg, #4479B3 0%, #7D5A9E 48%, #E5301E 100%)',
        'gradient-signature': 'linear-gradient(90deg, #4479B3 0%, #E5301E 50%, #F0701F 100%)',
      },

      boxShadow: {
        card: '0 12px 36px -24px rgba(16,26,40,0.28)',
        'card-hover': '0 24px 50px -28px rgba(16,26,40,0.42)',
        dropdown: '0 20px 50px -20px rgba(0,0,0,0.50)',
        cta: '0 14px 34px -16px rgba(240,112,31,0.55)',
      },

      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '30': '7.5rem',
      },

      /**
       * Skala opacity default Tailwind melompat dari 5 ke 10 ke 20,
       * sehingga `border-white/12` (nilai `border-dark` pada blueprint §6.2)
       * dan `bg-white/8` diam-diam tidak menghasilkan CSS apa pun.
       * Dua nilai ini ditambahkan supaya border card di permukaan gelap
       * benar-benar tampil.
       */
      opacity: {
        '8': '0.08',
        '12': '0.12',
      },

      maxWidth: {
        container: '1280px',
        prose: '68ch',
      },

      letterSpacing: {
        display: '-0.04em',
        heading: '-0.025em',
        label: '0.14em',
      },

      transitionTimingFunction: {
        forward: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}

export default config
