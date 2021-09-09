/**
 * @file Configures craco to be compatible with Tailwind CSS.
 */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
}
