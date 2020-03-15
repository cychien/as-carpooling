module.exports = {
  siteMetadata: {
    title: `AS 共乘`,
    description: `以更輕鬆、快速的方式往返中研院及鄰近捷運站`,
    siteUrl: 'http://as-carpooling.netlify.com',
    image: ``,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AS 共乘`,
        short_name: `AS 共乘`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#306060`,
        display: `minimal-ui`,
        //icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    /*
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-101659054-3',
        head: true,
        anonymize: false,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    */
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
  ],
}
