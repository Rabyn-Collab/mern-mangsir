/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'head-color': 'black',
    //   'c': 'red',
    //   'd': 'green'
    // },
    extend: {
      colors: {
        some: 'red'
      },

      gridTemplateColumns: {
        'grid-3': '1fr 1.3fr'
      }
    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
  },
  plugins: [],
}

