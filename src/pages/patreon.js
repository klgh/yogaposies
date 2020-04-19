import React from "react"
import PageLayout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = props => (
  <PageLayout>
    <SEO title="Yoga Posies | atlanta yoga for kids and adults" />
    <div className="patreon-page">
      <div className="patreon-header">
        <h1>Online Classes</h1>
        <p>
          I'm now teaching classes online. Membership is managed
          <a
            href="https://www.patreon.com/yogawithnatalie"
            className="linkItem"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            on Patreon
          </a>{" "}
          at different tiers. <br />
          Below are links to the categorized videos, when logged into Patreon
          you can view the videos there or easily here as well.
        </p>
      </div>

      <div className="container">
        <div className="class-cards">
          <div className="item1 card">
            <Link to="/live-classes">
              <h3>Live Classes</h3>
            </Link>
          </div>
          <div className="item2 card">
            <Link to="/mobility">
              <h3>Mobility</h3>
            </Link>
          </div>
          <div className="item3 card">
            <Link to="/yin-yoga">
              <h3 className="section-heading">Yin Yoga</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
)

export default IndexPage