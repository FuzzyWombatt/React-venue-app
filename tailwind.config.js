module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/8' : '12.5%',
        '150' : '150px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'Righteous': ['Righteous', 'cursive']
      },
      height: {
        '800' : '800px',
      },
      marginTop: {
        '18' : '18rem',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
