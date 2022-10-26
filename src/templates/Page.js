import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// const PageTemplate = ({ data }) => (
//   <Layout>
//     <SEO
//       title={data.wordpressPage.title}
//       description={data.wordpressPage.excerpt}
//     />
//     <div className={data.wordpressPage.slug}>
//       <h2>{data.wordpressPage.title}</h2>
//       <div
//         dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
//       ></div>
//     </div>
//   </Layout>
// )

const PageTemplate = ({ data: { previous, next, post } }) => {
  return (
    <Layout>
      ...
      <h1 itemProp="headline">{parse(post.title)}</h1>
      <p>{post.date}</p>
      {/* Checking for and adding the post excerpt if the current post has one*/}
      {post.excerpt && (
        <div className="post-excerpt">{parse(post.excerpt)}</div>
      )}
      {/* if we have a featured image for this post let's display it */}
      {featuredImage?.fluid && (
        <Image
          fluid={featuredImage.fluid}
          alt={featuredImage.alt}
          style={{ marginBottom: 50 }}
        />
      )}
      ...
    </Layout>
  )
}

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
