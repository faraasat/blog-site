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
    `gatsby-plugin-gatsby-cloud`,
    // `gatsby-plugin-offline`,
  ],
}
