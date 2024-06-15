/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      colors: {
        'light-color': 'rgb(239, 241, 228)',
        'dark-color': 'rgb(23, 23, 23)',
      },
      fontFamily: {
        primary: ['BakerSignetStd', 'sans-serif'],
        secondary: ['Unique', 'sans-serif'],
      },
      container: {
        padding: {
          xl: '55px',
          '2xl': '183px',
        },
      },
      fontSize: {
        '2rem': '2rem',
      },
    },
  },
  plugins: [],
};
