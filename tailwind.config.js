/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,scss,css,ejs}"],
  theme: {
    screens: {
      'sm': [{'max': '750px'}]
    },
    extend: {
      colors: {
        gray: '#6D6D6D',
        black: '#272727',
        key1: '#96927F',
        key2: '#5F594F'
      },
    },
  },
  plugins: [],
}

