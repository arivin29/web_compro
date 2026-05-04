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
        navy: {
          DEFAULT: '#0D1117',
          light: '#161B22',
          lighter: '#1E293B',
          hover: '#263248',
        },
        accent: {
          DEFAULT: '#00D4FF',
          hover: '#33DDFF',
          glow: 'rgba(0, 212, 255, 0.15)',
        },
        border: '#30363D',
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00D4FF, #0EA5E9)',
      },
    },
  },
  plugins: [],
}

export default config
