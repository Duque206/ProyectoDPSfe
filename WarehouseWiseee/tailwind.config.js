const nativewind = require('nativewind/tailwind/css')
const defaulttheme=require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Nunito',...defaulttheme.fontFamily.sans]
      }
    },
  },
  plugins: [nativewind],
}

