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
      },
      animation:{
        "loop-scroll":"loop-scroll 15s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateY(0)"},
          to:{transform:"translateY(-50%)"},
        },
      }
    },
  },
  plugins: [],
}