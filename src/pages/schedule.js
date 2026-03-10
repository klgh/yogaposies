import * as React from "react"
import Seo from "../components/seo"

const SchedulePage = () => (
  <>
    <section class="schedule">
      <h1>Class Schedule</h1>

      <div class="schedule-day">
        <h2>Monday</h2>
        <p>
          🕖 7:00 PM via Zoom on&nbsp;{" "}
          <a
            href="https://www.patreon.com/yogawithnatalie"
            target="_blank"
            rel="noreferrer"
          >
            Patreon
          </a>
        </p>
      </div>

      <div class="schedule-day">
        <h2>Thursday</h2>
        <p>
          🕖 9:00 AM via Zoom on&nbsp;{" "}
          <a
            href="https://www.patreon.com/yogawithnatalie"
            target="_blank"
            rel="noreferrer"
          >
            Patreon
          </a>
        </p>
      </div>

      <div class="schedule-day">
        <h2>Friday</h2>
        <p class="friday-yin">
          🕕 6:00 PM: Yin/Restorative Yoga at&nbsp;{" "}
          <a
            href="https://touchofhealthatlanta.com/calendar/"
            target="_blank"
            rel="noreferrer"
          >
            A Touch of Health
          </a>
          <i>A blend of yin, restorative, and myofascial release&nbsp;</i>
        </p>
      </div>

      <div class="schedule-day">
        <h2>Saturday</h2>
        <p>
          🕣 8:30 AM:&nbsp;
          <a href="https://dbc.org/fitness" target="_blank" rel="noreferrer">
            Dunwoody Baptist Fitness Center
          </a>
        </p>
        <p>
          🕣 11:30 AM:&nbsp;
          <a
            href="https://touchofhealthatlanta.com/calendar/"
            target="_blank"
            rel="noreferrer"
          >
            A Touch of Health
          </a>
        </p>
      </div>

      <div class="schedule-day">
        <h2>Sunday</h2>
        <p class="friday-yin">
          🕑 12:00 PM&nbsp;
          <a
            href="https://distilleryofmodernart.com/products/yoga-at-doma"
            target="_blank"
            rel="noreferrer"
          >
            Distillery of Modern Art
          </a>
          &nbsp;
          <i>Third Sunday of Every Month</i>
          &nbsp;|&nbsp; Signup&nbsp;
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScJ0SlZsXfupn3QNN_oPJbKUDUGCSDVql4u24awTCl-BSRdjg/viewform"
            target="_blank"
            rel="noreferrer"
          >
            here!{" "}
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
        <div class="testimonial">
          <p class="quote">
            I began practicing yoga about 15 years ago and Natalie was my first
            teacher. She taught me everything I needed to know about alignment,
            breathing, safety, strength and much more. Over the years, I've
            attended many, many classes taught by others, and she is ALWAYS the
            voice in my head, the one reminding me of the correct adjustments to
            make, reminding me to breathe and to be kind to myself. If you are
            new to yoga and want to explore its wonderful benefits, or older and
            need better flexibility and strength, or just need a place to feel
            safe and enjoy some movement, find a Natalie class. And if you can't
            touch your toes or get up from the floor easily, absolutely find a
            Natalie class!
          </p>
          <p class="author">- Carolyn S.</p>
        </div>
      </div>
    </section>
  </>
)

export const Head = () => <Seo title="About" />

export default SchedulePage
