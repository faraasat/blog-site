require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Blog Site`,
    description: `This is a basic Gatsby Blog Site using Contentful its CMS and it is a part Panacloud Bootcamp 2020.`,
    author: `@farasat-ali`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wl3m4ipieaqv`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/blog.svg`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // `gatsby-plugin-offline`,
  ],
}
