/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fontColorGrey: '#BDBDBD',
        backgroundColor: '#2C2C2C',
      },
    },
  },
  plugins: [],
};
