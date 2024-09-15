import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "../components/index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/natalie2.jpg"
        loading="eager"
        width={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>Yoga Posies</h1>
    </div>
    <div>
      <p>
        Natalie Leach E-RYT200, RCYT began her yoga practice in June 2000 and
        has been hooked ever since.
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
