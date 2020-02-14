import React from "react"
import PageLayout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = props => (
  <PageLayout>
    <SEO title="Yoga Posies | atlanta yoga for kids and adults" />

    <div className="hero">
      <Image />
    </div>

    <div className="container">
      <div className="upcoming-events">
        <h3>Upcoming Classes</h3>
        <ul>
          {props.data.allTribeEvents.edges.map(events => (
            <li>
              <div className="event-information">
                <h3 className="event-title">{events.node.title}</h3>
                <p className="event-details">
                  {events.node.start_date}
                  <br />
                  <a href={`${events.node.venue.website}`}>
                    {events.node.venue.venue}
                  </a>
                  <br />
                  <a href={`${events.node.website}`}>more info</a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </PageLayout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    yogaposies: file(relativePath: { eq: "kidyoga.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leaf: file(relativePath: { eq: "leaf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yogaclass: file(relativePath: { eq: "yogaclass.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allTribeEvents {
      edges {
        node {
          title
          start_date(formatString: "MMMM DD, YYYY")
          end_date(formatString: "HH:MM a")
          description
          cost
          categories {
            name
          }
          venue {
            venue
            website
          }
          website
        }
      }
    }
  }
`
