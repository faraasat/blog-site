import React from "react"
import LayoutComponent from "../../components/layout/layout.component"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import cuid from "cuid"
import "./post.styles.css"

const PostTemplate = ({ pageContext }) => {
  const { postDetails } = pageContext
  const postArray = JSON.parse(postDetails.content.raw).content.map(post => {
    return post
  })

  return (
    <LayoutComponent>
      <div className="blog-layout__post">
        <div className="blog-layout__post__box">
          <h1 className="blog-layout__post__title">{postDetails.title}</h1>
          <div className="blog-layout__post__box-details">
            <p>
              <b>By: </b>
              {postDetails.author}
            </p>
            <p>
              <b>Updated At: </b>
              {postDetails.updatedAt}
            </p>
          </div>
        </div>
        <div className="blog-layout__post__img-container">
          <img
            src={postDetails.image.file.url}
            alt={postDetails.image.description}
            width="800"
            height="350"
          />
        </div>
        <div className="blog-layout__post__content">
          {postArray.map(post => {
            return <span key={cuid()}>{documentToReactComponents(post)}</span>
          })}
        </div>
      </div>
    </LayoutComponent>
  )
}

export default PostTemplate
