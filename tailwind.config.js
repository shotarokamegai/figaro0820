/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss,css,ejs}"],
  theme: {
    screens: {
      'sm': [{'max': '750px'}]
    },
    extend: {
      colors: {
        pink: '#D69693',
        gray400: '#9496A1',
        darkNavy: '#070F24',
        base: '#070F24',
        black: '#272727',
        lightPink: '#FFF5EE' 
      },
    },
  },
  plugins: [],
}

