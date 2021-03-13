import * as React from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostLeafComponent from "../components/post-leaf/post-leaf.component"
import "./index.styles.css"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPosts(sort: { fields: updatedAt, order: DESC }) {
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
    `
  )

  console.log()

  return (
    <Layout>
      <SEO title="Index Page" />
      <div className="blog-page__index">
        {data.allContentfulPosts.nodes.map(post => {
          return <PostLeafComponent key={post.id} post={post} />
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
