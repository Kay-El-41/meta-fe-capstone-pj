/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-lemon': '#f4ce14',
        'green-lemon': '#495E57',
        'gray-lemon': '#edefee',
      },
      fontFamily: {
        markazi: ['Markazi Text', 'sans-serif'],
        karla: ['Karla', 'serif'],
      },
    },
  },
  plugins: [],
}
