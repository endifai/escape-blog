/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oxygen: ['var(--font-oxygen)'],
        lora: ['var(--font-lora)'],
      },
      colors: {
        secondary: '#7A7A7A',
        overlay: '#000000',
        black: '#2E2E2E',
      },
    },
  },
  plugins: [],
}
