/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#717AEF"
      }
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    
  },
  plugins: [],
}