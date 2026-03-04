/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080810',
        champagne: '#C9A84C',
        slate: '#1E1E2E',
      },
      fontFamily: {
        drama: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter Tight"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3333%)' }, // scroll 1/3 since there are 3 copies
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-33.3333%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
      }
    },
  },
  plugins: [],
}
