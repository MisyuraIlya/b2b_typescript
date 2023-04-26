/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
  transperent: twColors.transperent,
  black: '#2E3239',
  gray: '#CDCDCD',
  white: twColors.white,
  primary: '#FF9902',
  secondary: '#161D25',
  'bg-color': '#F2F2F5',
  aqua: '#268697',
  red: twColors.red[400]
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    colors,
    extend: {
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.725rem',
        '3xl': '2.155rem',
        '4x1': '2.58rem',
        '5x1': '3.45rem',
        '6x1': '4.3rem',
        '7x1': '5.17rem',
        '8x1': '6.9rem',
        '9x1': '9.2rem'
      },
      keyFrames: {
        animationOpacitty: {
          from: { opacity: 0.2 },
          to: { opacity: 1}
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity:0.3
          },
          '100%': {
            opacity:1,
            transform: 'sacle(1)'
          }
        }
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      }
    },
  },
  plugins: [],
}

