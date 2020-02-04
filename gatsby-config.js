require("dotenv").config()
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Yoga Posies`,
    description: `yoga for adults and kids in atlanta`,
    author: `@kaleighscruggs`,
    siteUrl: "https://yogaposies.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yoga Posies`,
        short_name: `yoga posies`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `black`,
        display: `minimal-ui`,
        /* icon: `src/images/gatsby-icon.png`,  */
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.WORDPRESS_BASE_URL,
        protocol: process.env.WORDPRESS_PROTOCOL,
        hostingWPCOM: process.env.WORDPRESS_HOSTING_WPCOM === "true",
        useACF: process.env.WORDPRESS_USE_ACF === "true",
        acfOptionPageIds: [],
        verboseOutput: process.env.WORDPRESS_VERBOSE_OUTPUT === "true",
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://content.yogaposies.com",
          replacementUrl: "https://localhost:8000",
        },
        auth: {
          wpcom_user: process.env.WORDPRESS_USER,
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: [],
        keepMediaSizes: false,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: "gatsby-source-tribe-events",
      options: {
        baseUrl: "https://content.yogaposies.com/",
        maxEvents: 5,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-75170508-2",
      },
    },
  ],
}
