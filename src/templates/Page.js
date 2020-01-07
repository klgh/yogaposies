import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <div className={data.wordpressPage.slug}>
      <h2>{data.wordpressPage.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
      ></div>
    </div>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
      slug
    }
  }
`
