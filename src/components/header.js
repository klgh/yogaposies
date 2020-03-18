import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="ypBannerHome" to="/">
      <h1>
        <Link>Yoga Posies</Link>
      </h1>
    </div>
    <nav role="navigation" className="ypMenu">
      <ul className="header-links" id="menu">
        <li>
          <a
            href="https://www.patreon.com/yogawithnatalie"
            className="linkItem"
            target="_blank"
            rel="noopener noreferrer"
          >
            online classes
          </a>
        </li>
        <li>
          <Link
            to="/about"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/classes"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            classes
          </Link>
        </li>
        <li>
          <Link
            to="/summer-camp"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            summer camp
          </Link>
        </li>
        <li>
          <Link
            to="/forms"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            forms
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            contact
          </Link>
        </li>
        <li>
          <Link
            to="https://www.facebook.com/YogaPosies/"
            className="font-awesome-icon"
          >
            <FontAwesomeIcon
              title="yoga posies facebook"
              icon={["fab", "facebook"]}
            />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.instagram.com/realyogisofatlanta/"
            className="font-awesome-icon"
          >
            <FontAwesomeIcon
              title="yoga posies instagram"
              icon={["fab", "instagram"]}
            />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
