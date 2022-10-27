module.exports = {
  siteMetadata: {
    title: `Yoga Posies`,
    description: `Yoga Classes in the metro Atlanta area including Dunwoody, Roswell, and Sandy Springs. Classes are geared towards anyone and everyone including kids, pre-teens, teens, adults, and prenatal yoga.`,
    author: `@klgh`,
    siteUrl: "https://yogaposies.com",
    shortDescription: `Our goal at Yoga Posies is to introduce yoga in a clear and simple way that makes it fun to do.`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-a11y-report",
      options: {
        showInProduction: false,
        toastAutoClose: false,
        query: `
          {
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        ignoreCheck: ["/404*", "/tag/*"],
        serverOptions: {
          host: "localhost",
          port: "8341",
        },
        axeOptions: {
          locale: "ja",
        },
        loggingOptions: {
          result: ["violations", "incomplete"],
        },
      },
    },
  ],
}
