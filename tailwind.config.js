/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      colors: {
        'light-color': 'rgb(239, 241, 228)',
        'dark-color': 'rgb(23, 23, 23)',
        'orange-color': 'rgb(239, 130, 0)',
        'white-color': 'rgb(255, 255, 255)',
      },
      fontFamily: {
        primary: ['BakerSignetStd', 'sans-serif'],
        secondary: ['Unique', 'sans-serif'],
        third: ['Ultra', 'sans-serif'],
        fourth: ['Josefin Sans', 'sans-serif'],
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
      borderRadius: {
        '10px': '10px',
      },
      textShadow: {
        header: '0px 4px 4px rgba(23, 23, 23, 0.4)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/typography'),
  ],
};
