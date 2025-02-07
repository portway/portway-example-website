/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-portway',
      options: {
        token: process.env.PORTWAY_TOKEN,
        projectId: process.env.PORTWAY_PROJECT_ID
      }
    }
  ]
}
