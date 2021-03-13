import React from "react"
import LayoutComponent from "../../components/layout/layout.component"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./post.styles.css"

const PostTemplate = ({ pageContext }) => {
  const { postDetails } = pageContext

  return (
    <LayoutComponent>
      <h1>{postDetails.title}</h1>
      <div>
        {documentToReactComponents(JSON.parse(postDetails.content.raw).content[0])}
        {documentToReactComponents(JSON.parse(postDetails.content.raw).content[1])}
        {documentToReactComponents(JSON.parse(postDetails.content.raw).content[2])}
        {documentToReactComponents(JSON.parse(postDetails.content.raw).content[3])}
        {documentToReactComponents(JSON.parse(postDetails.content.raw).content[4])}
        {documentToReactComponents(JSON.parse(postDetails.content.raw).content[5])}
        {documentToReactComponents(JSON.parse(postDetails.content.raw).content[6])}
        {documentToReactComponents(JSON.parse(postDetails.content.raw).content[7])}
      </div>
    </LayoutComponent>
  )
}

export default PostTemplate
