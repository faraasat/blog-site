import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.styles.css"
import HeaderComponent from "../header/header.component"
import FooterComponent from "../footer/footer.component"

const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main className="blog-component__layout-main">{children}</main>
      <FooterComponent />
    </>
  )
}

export default Layout
