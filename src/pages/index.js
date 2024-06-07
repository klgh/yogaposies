import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "../components/index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
// ]

const moreLinks = [
  { text: "Patreon", url: "https://www.patreon.com/yogawithnatalie" },
  {
    text: "Instagram",
    url: "https://www.instagram.com/realyogisofatlanta/",
  },
  {
    text: "Video Library",
    url: "https://yogawithnatalie.yoga/",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>Yoga Posies</h1>
      {/* <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p> */}
    </div>
    <div>
      <p>
        Natalie Leach E-RYT200, RCYT began her yoga practice in June 2000 and
        has been hooked ever since.
        {/* This online studio is open as a way to cultivate and maintain your yoga practice, whether you are at home, on a trip or just feeling a bit under the weather and decide to stay home. The classes are designed to give you some choices in your movement practice; to complement the practice that you do in the yoga room. These classes will help you to work on and maintain your mobility and strength wherever you may be. */}
        {/* After dealing with multiple injuries over the years, I finally found some relief when I started adding strength and more functional based movements to my existing yoga practice. Sometimes I laugh because I think, 'is this even yoga anymore'? */}
      </p>
    </div>
    {/* <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul> */}
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
