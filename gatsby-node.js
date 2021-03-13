var path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulPosts {
        nodes {
          title
          id
          slug
          updatedAt(formatString: "DD MMMM, YYYY")
          subtitle
          author
          content {
            raw
          }
          image {
            createdAt(formatString: "DD MMMM, YYYY")
            file {
              url
            }
            description
          }
        }
      }
    }
  `)

  result.data.allContentfulPosts.nodes.map(post => {
    createPage({
      path: `/posts/${post.slug}`,
      component: path.resolve("./src/templates/posts/post.template.tsx"),
      context: {
        postDetails: post,
      },
    })
  })
}
