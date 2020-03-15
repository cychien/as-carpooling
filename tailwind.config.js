module.exports = {
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      primary: '#2d74bb',
      secondary: '#ffb73d',
      'secondary-dark': '#B37307',
      'dark-gray': 'rgba(0, 0, 0, 0.75)',
      gray: 'rgba(0, 0, 0, 0.5)',
      'light-gray': 'rgba(0, 0, 0, 0.25)',
    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: '#2d74bb',
      secondary: '#ffb73d',
      'secondary-dark': '#B37307',
      'dark-gray': 'rgba(0, 0, 0, 0.75)',
      gray: 'rgba(0, 0, 0, 0.5)',
      'light-gray': 'rgba(0, 0, 0, 0.25)',
    }),
  },
  variants: {},
  plugins: [],
}
