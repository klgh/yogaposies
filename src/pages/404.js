import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/layout"
import SEO from "../components/seo"
const NotFoundPage = props => (
  <PageLayout>
    <SEO title="404: Not found" />
    <div class="fourohfourpage">
      <h1>NOT FOUND</h1>
      <p>You just hit a page that doesn&#39;t exist... the sadness! </p>
      <Link to="/">Go home and try again</Link>
    </div>
  </PageLayout>
)

export default NotFoundPage
