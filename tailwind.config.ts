import type { Config } from 'tailwindcss'

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
          blue: '#1565C0',
          'blue-dark': '#0D47A1',
          'blue-light': '#1E88E5',
          'blue-pale': '#E3F2FD',
          red: '#D94A3D',
          'red-hover': '#C43A2E',
          gray: '#5C6B7A',
          dark: '#1A2332',
        },
        accent: {
          DEFAULT: '#1565C0',
          hover: '#1E88E5',
          light: '#E3F2FD',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
          card: '#FFFFFF',
          hover: '#F1F5F9',
          blue: '#0D47A1',
          'blue-light': '#1565C0',
        },
        border: '#E2E8F0',
        text: {
          primary: '#1A2332',
          secondary: '#475569',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #1565C0, #1E88E5)',
        'gradient-brand': 'linear-gradient(135deg, #0D47A1, #1565C0)',
        'gradient-hero': 'linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1E88E5 100%)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(21, 101, 192, 0.15)',
        'blue': '0 4px 14px rgba(21, 101, 192, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
