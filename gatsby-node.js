/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
*/
const path = require('path')
const marked = require('marked')

const documentsQuery = `
  query portwayQuery {
    allPortwayDocument {
      nodes {
        children {
          id
          ... on PortwayField {
            id
            name
            order
            structuredValue {
              type
              tag
            }
            type
            uid
            updatedAt
            value
            versionId
            createdAt
            documentId
          }
        }
        lastPublishedAt
        projectId
        publishedVersionId
        uid
        updatedAt
        name
        id
        createdAt
      }
    }
  }
`

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(documentsQuery)
  data.allPortwayDocument.nodes.forEach((document) => {
    const slugger = new marked.Slugger()
    const permalink = slugger.slug(document.name)
    actions.createPage({
      path: `/${permalink}`,
      component: require.resolve('./src/pages/page.js'),
      context: {
        document: document,
        slug: permalink
      }
    })
  })
}
