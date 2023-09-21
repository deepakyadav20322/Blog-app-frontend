/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#53BD95',
        'primary-dark': '#2c785c',
    },
},
fontFamily: {
    sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [  require('@tailwindcss/forms')],
}