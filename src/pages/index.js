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
      <div className="index-cards">
        <div className="item1 card">
          <Link to="/kids">
            <Img fluid={props.data.yogaposies.childImageSharp.fluid} />
            <h2>Kids Yoga</h2>
          </Link>
          <div className="card-text">
            <p>
              Yoga is expressive and that is why it is so appealing to children.
              Our goal at Yoga Posies is to introduce yoga in a clear and simple
              way that makes it fun to do. We practice fun-filled poses, games,
              and breathing exercises to promote:
            </p>
            <ul>
              <li>Physical Strength and Flexibility Concentration</li>
              <li>Focus and Attention</li>
              <li>A Feeling of Well-being and Respect for others</li>
              <li>Confidence and Self-Esteem</li>
            </ul>
            <p>
              Through learning the physical postures of yoga, your child will
              learn how to explore and appreciate his/her own creative
              potential. Classes maintain a positive environment that supports
              self-esteem, confidence, body appreciation and tools for stress
              management.
            </p>
          </div>
        </div>
        <div className="item2 card">
          <Img fluid={props.data.leaf.childImageSharp.fluid} />
          <div className="card-text">
            <h2>Benefits of Yoga for kids</h2>
            <p>
              Yoga is for everyone. Children do yoga naturally, they love to be
              upside down in downward facing dog, stand on one leg like a tree
              &amp; crawl on the floor like a cat. Children are very flexible -
              we eventually lose that flexibility as we age. Through playful
              laughter &amp; a sense of adventure kids can learn basic
              flexibility, coordination, body awareness &amp; self control. If
              they are feeling anxious about talking in front of the class or
              having trouble focusing on their homework, kids will unconsciously
              call upon the mind calming techniques taught to them in yoga.
            </p>
          </div>
        </div>
        <div className="item3 card">
          <Img fluid={props.data.yogaclass.childImageSharp.fluid} />
          <div className="card-text">
            <h2 className="section-heading">Children Who Practice Yoga</h2>
            <ul>
              <li>Develop strong, limber and healthy bodies</li>
              <li>Set a lifelong foundation for well-being</li>
              <li>Foster creative expression, imagination</li>
              <li>Increase focus, concentration and attention span</li>
              <li>
                Cultivate self-esteem, setting patterns of success and
                achievement
              </li>
              <li>Relax and sleep better</li>
              <li>Cope with life stressors more effectively</li>
              <li>Learn about anatomy and physiology</li>
              <li>
                Discover a sense of awareness and respect for themselves, for
                others and the world around them
              </li>
            </ul>
          </div>
        </div>
      </div>
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
