import { Link } from "gatsby"
import React from "react"
import "./post-leaf.styles.css"

const PostLeafComponent = ({ post }) => {
  return (
    <>
    <Link to={`posts/${post.slug}`} className="blog-component__post-leaf">
      <div className="blog-component__post-leaf__img-container">
        <img
          src={post.image.file.url}
          alt={post.image.description}
          width="250"
          height="130"
        />
      </div>
      <div className="blog-component__post-leaf__details">
        <h1 className="blog-component__post-leaf__title">{post.title}</h1>
        <p
          className="blog-component__post-leaf__subtitle"
          title={post.subtitle}
        >
          {post.subtitle}
        </p>
        <div className="blog-component__post-leaf__details-detail">
          <span className="blog-component__post-leaf__author">
            <b>By:</b> {post.author}
          </span>
          <span className="blog-component__post-leaf__updated-at">
            <b>Last Updated At:</b> {post.updatedAt}
          </span>
        </div>
      </div>
    </Link>
    <hr className='blog-component__post-leaf__hr' />
    </>
  )
}

export default PostLeafComponent
