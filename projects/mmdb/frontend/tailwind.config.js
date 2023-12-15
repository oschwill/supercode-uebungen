/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: '#264653',
        primaryFontColor: '#FFF',
        secondaryFontColor: '#2A9D8F',
        tertiaryFontColor: '#A16171',
        favoriteFontColor: '#E9C46A',
      },
    },
  },
  plugins: [],
};
