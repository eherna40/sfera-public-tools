const colors = require('./src/styles/colors')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      fontFamily: {
        body: ['Atkinson Hyperlegible Regular'],
      },
      fontSize: {
        xxs: '.6rem',
      },
      screens: {
        lgg: '1025px',
      },
    },
    minWidth: {
      8: '2rem',
      9: '2.5rem',
      16: '4rem',
      32: '8rem',
      60: '15rem',
      96: '24rem',
    },
  },
  variants: {
    extend: {
      // display: ['group-hover'],
    },
  },
  plugins: [],
}
