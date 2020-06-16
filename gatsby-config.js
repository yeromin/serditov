/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
          `Patua One`,
          `Comfortaa`,
          `Montserrat\:800`,
          `Questrial`,
          `Didact Gothic`,
          `Poppins\:900,display=swap`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-netlify-cms`
  ],
}
