/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p: '#0F172A',  // Example primary color
        buttom: '#1D4ED8',  // Example secondary color
        accent: '',  // Example accent color
        dsv: '#FDF4FF',
      },
      fontFamily:{
        sans:['Roboto',' sans-serif']
      },
      gridTemplateColumns:{
    '70/30':'70% 28%'
      },
    },
  },
  plugins: [],
}

