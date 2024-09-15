import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <section class="about">
      <h1>About Me</h1>
      <div class="about-content">
        <p>
          My yoga journey started in my late 30s. I came to the mat hoping to
          heal an ailing back that kept me reliant on Advil and left me very
          immobile. After my first class, I was hooked. I encouraged my husband
          to join me, and we both practiced yoga in our living room for years
          before venturing out to instructor-led classes. I was convinced that
          yoga could and would change my life, and that of my kids. So, in the
          fall of 2003, I enrolled in teacher training at Peachtree Yoga Center,
          and I've been teaching ever since.
        </p>
        <p>
          Over the past 20+ years, I have taught people of all ages—from kids as
          young as 2 to my oldest student, who was in his late 80s. I created
          and led a number of after-school programs throughout Dekalb County.
          I've taught classroom teachers how to incorporate yoga in the
          classroom and have held many classes for faculty and staff. I've
          taught yoga as PE at GSU Perimeter and shown preschoolers how to
          breathe. I've prepared women for childbirth through prenatal yoga and
          helped them find community and understanding through postnatal
          classes. I've brought yoga to life through books for elementary-aged
          students and helped high schoolers release stress through restorative
          postures. I've worked with athletes and have been a yoga teacher for
          team sports in various private schools.
        </p>
        <p>
          I've taught in backyards and basements, churches and synagogues,
          convention halls, school hallways, at the start of 5K races, and
          during recovery at the end of races. I've taught in studios and
          online. Yoga has been a constant part of my life.
        </p>
        <p>
          I believe that being on the mat teaches us about living off the mat. I
          love that we train ourselves to move, breathe, and stay present amid
          the chaos of the mind. I like to think of this practice as an
          investment in your future self. You do this now, so that in a year,
          five years, ten years, or twenty years, you're still able to move, get
          up, and live independently.
        </p>
        <p>
          I am certified in yoga, Pilates, kids/teens yoga, and Reiki. I'm a
          lifelong student and am grateful to have found the right teachers
          along the way to help me fill my cup so that I can do what I
          absolutely love to do!
        </p>
        <p>
          My classes are focused on you, the practitioner, to ensure you have an
          empowered experience rooted in functional movements and yoga asana,
          with a sprinkling of Pilates-based movements. I aim to blend it all
          together to create a playful yet educational exploration of your body.
          My hope is that our time practicing together (because it is a
          practice) will foster your curiosity about how your body moves and
          reacts on the mat—and how moving better helps you feel better. I want
          you to realize your full potential, both on and off the mat!
        </p>
        <p>
          If you have any questions, please feel free to email me at &nbsp;
          <a href="mailto:realyogisofatlanta@gmail.com?subject=Website Contact">
            realyogisofatlanta@gmail.com
          </a>
        </p>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
