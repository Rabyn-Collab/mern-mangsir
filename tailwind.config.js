/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'some': 'red'
      },
      gridTemplateColumns: {
        'grid-3': '1fr 1.3fr'
      }
    },
  },
  plugins: [],
}

