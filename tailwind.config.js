/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#FFF8F0',
        peach: '#FF8C61',
        rose: '#E8546A',
        brown: '#4A2C2A',
      },
    },
  },
  plugins: [],
}