/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-portway',
      options: {
        token: process.env.PORTWAY_TOKEN,
        projectId: 56
      }
    }
  ]
}
