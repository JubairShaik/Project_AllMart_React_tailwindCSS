/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'Sans': ['DM Sans', 'sans-serif'],
       'Nunito' : ['Nunito Sans', 'sans-serif'],
       'Poppins' : ['Poppins', 'sans-serif'],
       'blinker' : ['Blinker', 'sans-serif'],
       'space' : ['Space Grotesk', 'sans-serif']
       
         
      },
    },
  },
  plugins: [],
}
