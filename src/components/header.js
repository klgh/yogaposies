import { Link } from "gatsby"
import * as React from "react"

const samplePageLinks = [
  {
    text: "About",
    url: "/about",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "Schedule",
    url: "/schedule",
    badge: false,
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
]

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <div>
      {" "}
      {samplePageLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <Link to={link.url}>{link.text}</Link>
          {i !== samplePageLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
  </header>
)

export default Header
