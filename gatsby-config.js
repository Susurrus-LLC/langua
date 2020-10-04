module.exports = {
  siteMetadata: {
    title: `Langua`,
    subtitle: `A suite of language tools`,
    description: `A suite of language tools.`,
    author: `Ian A. Cook`,
    authorURL: `https://github.com/nai888`,
    appGhURL: `https://github.com/susurrus-llc/langua`,
    version: `0.4.3`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans:400,400i,700,700i`,
          `Noto+Serif:400,400i,700,700i&amp;subset=greek,greek-ext,latin-ext`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/langua`,
        background_color: `#21646e`,
        theme_color: `#21646e`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}