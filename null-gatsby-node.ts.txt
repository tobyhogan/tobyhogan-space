const path = require(`path`)

// Log out information after a build is done

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    query {
      allSamplePages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)




  result.data.allSamplePages.edges
  .forEach(edge => {
    createPage({
      path: `dva`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title,
      },
    })
  })

  /*

  result.data.allSamplePages.edges
  .filter(edge => edge.includes('patch-notes'))
  .forEach(edge => {
    createPage({
      path: `patch-notes/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title,
      },
    })
  })

  */



}