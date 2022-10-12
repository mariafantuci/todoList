/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      'transparent': 'transparent',

      'black': '#000000',
      'white': '#ffffff',
  
      'blue': '#4EA8DE',
      'blue-dark': '#1E6F9F',
      
      'purple': '#8284FA',
      'purple-dark': '#5E60CE',
      'focus': '#9747FF',

      'danger': '#E25858',
      
      gray: {
        900: '#191919',
        700: '#0D0D0D',
        600: '#1A1A1A',
        500: '#262626',
        400: '#333333',
        300: '#808080',
        200: '#D9D9D9',
        100: '#F2F2F2',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
