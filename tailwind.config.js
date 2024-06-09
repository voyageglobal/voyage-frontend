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
        maxWidth: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1170px',
          '2xl': '1170px',
        },
        padding: {
          '2xl': '183px',
        },
      },
    },
  },
  plugins: [],
};
