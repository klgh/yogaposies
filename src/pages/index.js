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
        {/* This online studio is open as a way to cultivate and maintain your yoga practice, whether you are at home, on a trip or just feeling a bit under the weather and decide to stay home. The classes are designed to give you some choices in your movement practice; to complement the practice that you do in the yoga room. These classes will help you to work on and maintain your mobility and strength wherever you may be. */}
        {/* After dealing with multiple injuries over the years, I finally found some relief when I started adding strength and more functional based movements to my existing yoga practice. Sometimes I laugh because I think, 'is this even yoga anymore'? */}
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
