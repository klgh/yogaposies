import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="ypBannerHome" to="/">
      <h1>
        <Link>Yoga Posies</Link>
      </h1>
    </div>
    <nav role="navigation">
      <div className="ypMenu" id="menuToggle">
        <ul className="header-links" id="menu">
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
              to="/links"
              className="linkItem"
              activeClassName="linkItemActive"
            >
              links
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
        </ul>
      </div>
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
