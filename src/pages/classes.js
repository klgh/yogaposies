import React from "react"
import PageLayout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = props => (
  <PageLayout>
    <SEO title="Yoga Posies | atlanta yoga for kids and adults" />
    <div className="classes-page">
      <div className="classes-header">
        <h1>Classes</h1>
      </div>

      {/*   <div className="upcoming-events">
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
    </div> */}

      <div className="container">
        <div className="class-cards">
          <div className="item1 card">
            <Link to="/kids">
              <Img fluid={props.data.yogaposies.childImageSharp.fluid} />
              <h2>Kids</h2>
            </Link>
            <div className="card-text">
              <p>
                Yoga is expressive and that is why it is so appealing to
                children. Our goal at Yoga Posies is to introduce yoga in a
                clear and simple way that makes it fun to do. We practice
                fun-filled poses, games, and breathing exercises to promote:
              </p>
            </div>
          </div>
          <div className="item2 card">
            <Link to="/adults">
              <Img fluid={props.data.leaf.childImageSharp.fluid} />
              <h2>Adults</h2>
            </Link>

            <div className="card-text">
              <p>
                Yoga is for everyone. Children do yoga naturally, they love to
                be upside down in downward facing dog, stand on one leg like a
                tree &amp; crawl on the floor like a cat. Children are very
                flexible - we eventually lose that flexibility as we age.
              </p>
            </div>
          </div>
          <div className="item3 card">
            <Link to="/family-yoga">
              <Img fluid={props.data.yogaclass.childImageSharp.fluid} />
              <h2 className="section-heading">Family Yoga</h2>
            </Link>
            <div className="card-text">
              <p>
                Yoga is for everyone. Children do yoga naturally, they love to
                be upside down in downward facing dog, stand on one leg like a
                tree &amp; crawl on the floor like a cat. Children are very
                flexible - we eventually lose that flexibility as we age.
              </p>
            </div>
          </div>
          <div className="item4 card">
            <Link to="/event-yoga">
              <Img fluid={props.data.yogaposies.childImageSharp.fluid} />
              <h2>Event Yoga</h2>
            </Link>
            <div className="card-text">
              <p>
                Yoga is expressive and that is why it is so appealing to
                children. Our goal at Yoga Posies is to introduce yoga in a
                clear and simple way that makes it fun to do. We practice
                fun-filled poses, games, and breathing exercises to promote:
              </p>
            </div>
          </div>
          <div className="item5 card">
            <Link to="/private-yoga">
              <Img fluid={props.data.leaf.childImageSharp.fluid} />
              <h2>Private Classes</h2>
            </Link>

            <div className="card-text">
              <p>
                Yoga is for everyone. Children do yoga naturally, they love to
                be upside down in downward facing dog, stand on one leg like a
                tree &amp; crawl on the floor like a cat. Children are very
                flexible - we eventually lose that flexibility as we age.
                Through playful laughter &amp; a sense of adventure kids can
                learn basic flexibility, coordination, body awareness &amp; selfcontrol. 
              </p>
            </div>
          </div>
          <div className="item6 card">
            <Link to="/workshops-and-trainings">
              <Img fluid={props.data.yogaclass.childImageSharp.fluid} />
              <h2 className="section-heading">Workshops &amp; Trainings</h2>
            </Link>
            <div className="card-text">
              <p>
                Yoga is for everyone. Children do yoga naturally, they love to
                be upside down in downward facing dog, stand on one leg like a
                tree &amp; crawl on the floor like a cat. Children are very
                flexible - we eventually lose that flexibility as we age.
              </p>
            </div>
          </div>
        </div>
        
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
