/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 12px 40px rgba(34, 24, 61, 0.08)' },
    },
  },
  daisyui: { themes: false },
  plugins: [require('daisyui')],
}
