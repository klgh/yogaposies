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
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className="header-links" id="menu">
          <li>
            <Link
              to="/adults"
              className="linkItem"
              activeClassName="linkItemActive"
            >
              adults
            </Link>
          </li>
          <li>
            <Link
              to="/kids"
              className="linkItem"
              activeClassName="linkItemActive"
            >
              kids
            </Link>
          </li>
          <li>
            <Link
              to="/family-yoga"
              className="linkItem"
              activeClassName="linkItemActive"
            >
              family
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
              to="/links"
              className="linkItem"
              activeClassName="linkItemActive"
            >
              links
            </Link>
          </li>
          <li>
            <Link
              to="/workshops-and-trainings"
              className="linkItem"
              activeClassName="linkItemActive"
            >
              Workshops and Trainings
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
              to="/summer-camp"
              className="linkItem"
              activeClassName="linkItemActive"
            >
              summer camp
            </Link>
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
