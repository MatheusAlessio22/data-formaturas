/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        offwhite: {
          DEFAULT: '#FAF9F5',
          subtle: '#F3F1EB',
        },
        'card-white': '#FFFFFF',
        wine: {
          DEFAULT: '#800E0E',
          hover: '#680A0A',
          soft: '#FDF2F2',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}
