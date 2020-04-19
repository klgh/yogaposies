require("dotenv").config()
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Yoga Posies`,
    description: `Yoga Classes in the metro Atlanta area including Dunwoody, Roswell, and Sandy Springs. Classes are geared towards anyone and everyone including kids, pre-teens, teens, adults, and prenatal yoga.`,
    author: `@kaleighscruggs`,
    siteUrl: "https://yogaposies.com",
    shortDescription: `Our goal at Yoga Posies is to introduce yoga in a clear and simple way that makes it fun to do.`,
    image: `src/images/YogaPosies.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yoga Posies`,
        short_name: `yoga posies`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#a89797`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
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
    /* {
      resolve: "gatsby-source-tribe-events",
      options: {
        baseUrl: "https://content.yogaposies.com/",
        maxEvents: 5,
      },
    }, */
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-75170508-2",
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://yogaposies.com",
        sitemap: "https://yogaposies.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
          },
        ],
      },
    },
  ],
}
