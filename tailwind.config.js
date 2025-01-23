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
      backgroundColor: {

      },
      gridTemplateColumns: {
        'grid-3': '1fr 1.3fr'
      },
      keyframes: {
        colorsjee: {
          '20%': { color: 'red' },
          '40%': { color: 'blue' },
          '100%': { color: 'green' }
        },

      },
      animation: {
        cl: 'colorsjee 10s ease-in-out infinite'
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

