import React from "react"
import PageLayout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <PageLayout>
    <SEO title="Yoga Posies | atlanta yoga for kids and adults" />
    <div class="hpImage">
      <Image />
    </div>

    <div class="container">
      <h2 class="section-heading">
        <Link to="/kids">kids yoga</Link>
      </h2>
      <p class="lead">
        <img
          class="size-medium wp-image-80 alignright"
          src="http://yogaposies.com/wp-content/uploads/2016/03/balance-300x225.jpg"
          alt="balance"
          width="300"
          height="225"
        />
      </p>
      <p class="lead">
        Yoga is expressive and that is why it is so appealing to children. Our
        goal at Yoga Posies is to introduce yoga in a clear and simple way that
        makes it fun to do. We practice fun-filled poses, games and breathing
        exercises to promote:
      </p>
      <ul>
        <li>Physical Strength and Flexibility Concentration</li>
        <li>Focus and Attention</li>
        <li>A Feeling of Well-being and Respect for others</li>
        <li>Confidence and Self-Esteem</li>
      </ul>
      <p>
        Through learning the physical postures of yoga, your child will learn
        how to explore and appreciate his/her own creative potential. Classes
        maintain a positive environment that supports self-esteem, confidence,
        body appreciation and tools for stress management.
      </p>
      <h2 class="section-heading">
        Benefits of Yoga
        <br />
        for kids
      </h2>
      <p>
        <img
          class="alignleft size-medium wp-image-82"
          src="http://yogaposies.com/wp-content/uploads/2016/03/camp-300x225.jpg"
          alt="camp"
          width="300"
          height="225"
        />
      </p>
      <p class="lead">
        Yoga is for everyone. Children do yoga naturally, they love to be upside
        down in downward facing dog, stand on one leg like a tree &amp; crawl on
        the floor like a cat. Children are very flexible - we eventually lose
        that flexibility as we age. Through playful laughter &amp; a sense of
        adventure kids can learn basic flexibility, coordination, body awareness
        &amp; self control. If they are feeling anxious about talking in front
        of the class or having trouble focusing on their homework, kids will
        unconsciously call upon the mind calming techniques taught to them in
        yoga.
      </p>
      <p>
        “
        <span>
          Children are pure potentiality, harnessing this energy at an earlier
          age only accelerates yoga’s path to enlightenment
        </span>
        .” <em> Deepak Chopra</em>
      </p>
      <h2 class="section-heading">Children Who Practice Yoga</h2>
      <p>
        <img
          class="alignright size-medium wp-image-83"
          src="http://yogaposies.com/wp-content/uploads/2016/03/camp5-300x225.jpg"
          alt="camp5"
          width="300"
          height="225"
        />
      </p>
      <ul>
        <li>Develop strong, limber and healthy bodies</li>
      </ul>
      <ul>
        <li>Set a lifelong foundation for well-being</li>
      </ul>
      <ul>
        <li>Foster creative expression, imagination</li>
      </ul>
      <ul>
        <li>Increase focus, concentration and attention span</li>
      </ul>
      <ul>
        <li>
          Cultivate self-esteem, setting patterns of success and achievement
        </li>
      </ul>
      <ul>
        <li>Relax and sleep better</li>
      </ul>
      <ul>
        <li>Cope with life stressors more effectively</li>
      </ul>
      <ul>
        <li>Learn about anatomy and physiology</li>
      </ul>
      <ul>
        <li>
          Discover a sense of awareness and respect for themselves, for others
          and the world around them
        </li>
      </ul>
      <p>
        “Success in yoga provides a template for success in life and its never
        to young to start.” <em>David Simon</em>
      </p>
    </div>
  </PageLayout>
)

export default IndexPage
