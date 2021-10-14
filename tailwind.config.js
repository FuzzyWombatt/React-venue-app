module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/8' : '12.5%',
        '150' : '150px',
        'min-content' : 'min-content'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'Righteous': ['Righteous', 'cursive']
      },
      height: {
        '800' : '800px',
      },
      backgroundColor: {
        'orange': 'orange',
        'burnt-orange' : '#CC5500',
        'tangelo' : '#EC7625'
      },
      borderColor: {
        'tangelo': '#EC7625'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
