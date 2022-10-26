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
          <Link to="/patreon">
            <Img fluid={props.data.yogawithnatalie.childImageSharp.fluid} />
            <h2>Yoga With Natalie Online</h2>
          </Link>
          <div className="card-text">
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
              Below are links to the categorized videos, when logged into
              Patreon you can view the videos there or easily here as well.
            </p>
          </div>
        </div>
        <div className="item2 card">
          <Link to="/kids">
            <Img fluid={props.data.yogakids.childImageSharp.fluid} />
            <h2>Benefits of Yoga for kids</h2>
          </Link>
          <div className="card-text">
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
            {/*  <p>
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
            </p> */}
          </div>
        </div>
        {/*  <div className="item3 card">
          <Img fluid={props.data.yogateens.childImageSharp.fluid} />
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
        <div className="item4 card">
          <Img fluid={props.data.familyyoga.childImageSharp.fluid} />
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
        </div> */}
      </div>
      {/* <div className="upcoming-events">
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
      <div className="quotes">
        <div className="quote1">
          <p>
            <em>
              “Children are pure potentiality, harnessing this energy at an
              earlier age only accelerates yoga’s path to enlightenment.” -
              Deepak Chopra
            </em>
          </p>
        </div>
        <div className="quote2">
          <p>
            <em>
              “Success in yoga provides a template for success in life and its
              never to young to start.” - David Simon
            </em>
          </p>
        </div>
      </div>
    </div>
  </PageLayout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    yogawithnatalie: file(relativePath: { eq: "YogawithNatalie.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yogateens: file(relativePath: { eq: "yogateensq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    familyyoga: file(relativePath: { eq: "family-yogasq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yogakids: file(relativePath: { eq: "yogakidsq.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
