/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter", "serif"],
        'Helvetica-Bold':['Helvetica-Bold','sans-serif']
      }
    },
  },
  plugins: [],
}