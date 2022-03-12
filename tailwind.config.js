
const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        500: '#6B2AD7',
        // 500: '#00ff00',
        700: '#501fa3'
      },
      dropShadow: "#7960A3",
      white: "#FFFFFF",
      black: '#000000'
    },
    fontFamily: {
      'poppins': ["'Poppins'", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}