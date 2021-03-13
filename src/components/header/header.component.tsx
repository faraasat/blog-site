import React from "react"
import "./header.styles.css"
import { Link } from "gatsby"

const HeaderComponent = () => {
  return (
    <nav className="blog-component__header">
      <div className="blog-component__container">
        <Link to="/" className='blog-component__header-brand'>Blog Site</Link>
        <div  className='blog-component__header-links'>
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default HeaderComponent
