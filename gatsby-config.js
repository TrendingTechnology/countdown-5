module.exports = {
  siteMetadata: {
    title: `Cuenta regresiva`,
    description: `Cuenta regresiva para viaje a las catas.`,
    author: `@josehernandezv`,
    // siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `event-countdown`,
        short_name: `countdown`,
        start_url: `/`,
        background_color: `#fbdb04`,
        theme_color: `#fbdb04`,
        display: `minimal-ui`,
        icon: `src/images/mario.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
