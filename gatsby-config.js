module.exports = {
  siteMetadata: {
    title: 'Adam Marc Williams'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`
        ]
      }
    }
  ]
}