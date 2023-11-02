/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        movieBoxBg: '#3d3737',
        genreColor: '#a39e9e',
      },
    },
  },
  plugins: [],
};
