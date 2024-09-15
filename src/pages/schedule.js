import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SchedulePage = () => (
  <Layout>
    <section class="schedule">
      <h1>Class Schedule</h1>

      <div class="schedule-day">
        <h2>Monday</h2>
        <p>🕖 7pm via Zoom on Patreon</p>
      </div>

      <div class="schedule-day">
        <h2>Friday</h2>
        <p class="friday-yin">
          🕕 6:00 PM: Yin/Restorative Yoga{" "}
          <i>
            A blend of yin, restorative, and myofascial release at A Touch of
            Health in Sandy Springs
          </i>
          <b>Next class: September 20</b>
        </p>
      </div>

      <div class="schedule-day">
        <h2>Saturday</h2>
        <p>
          🕣 8:30 AM:&nbsp;
          <a
            href="https://www.dbc.org/fitness"
            target="_blank"
            rel="noreferrer"
          >
            Dunwoody Baptist Fitness Center
          </a>
        </p>
        <p>🕙 10:00 AM: Get on Natalie's email list to find out more!</p>
      </div>

      <div class="schedule-day">
        <h2>Sunday</h2>
        <p>
          🕑 12:00 PM: Once a month at &nbsp;
          <a
            href="https://distilleryofmodernart.com/our-events/"
            target="_blank"
            rel="noreferrer"
          >
            Distillery of Modern Art
          </a>
        </p>
      </div>
    </section>
    <section class="testimonials">
      <h2>What Clients Are Saying</h2>
      <div class="testimonial-container">
        <div class="testimonial">
          <p class="quote">
            “Yoga was a tremendous outlet for my child when she was struggling
            with issues at school. It helped her relax and learn stress
            management. Natalie was so patient and kind—she was a calming
            influence when my daughter needed it most. I cannot say enough about
            how wonderful Natalie is!”
          </p>
          <p class="author">- Carolyn F</p>
        </div>
        <div class="testimonial">
          <p class="quote">
            Thanks to Natalie's instruction my yoga practice has moved from
            focusing on stretching (that's what I thought yoga was years ago!!)
            to strengthening my body. This allows me to feel planted in my poses
            and has increased my fitness. Natalie's online classes have been a
            seamless transition from our in person classes. She met the
            challenges of 2020 head on and we never missed a class. Natalie's
            personal attention in class (online or in person) helps me find
            solutions to the more challenging moves and poses and ultimately
            makes me a better yoga student.
          </p>
          <p class="author">- CB</p>
        </div>
      </div>
    </section>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default SchedulePage
