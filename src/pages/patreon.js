import React from "react"
import PageLayout from "../components/layout"
import SEO from "../components/seo"

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
          you can view the videos there or easily{" "}
          <a
            href="https://yogawithnatalie.yoga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          as well.
        </p>
      </div>

      <div className="container">
        <div className="class-cards">
          <div className="item1 card">
            <a
              href="https://yogawithnatalie.yoga/live-videos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Live Classes</h3>
            </a>
          </div>
          <div className="item2 card">
            <a
              href="https://yogawithnatalie.yoga/mobility/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Mobility</h3>
            </a>
          </div>
          <div className="item3 card">
            <a
              href="https://yogawithnatalie.yoga/yin-meditation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="section-heading">Yin Yoga</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
)

export default IndexPage
