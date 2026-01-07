/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#FFB6C1',
        'peach': '#FFDAB9',
        'cream': '#FFF8DC',
        'charcoal': '#2C2C2C',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
