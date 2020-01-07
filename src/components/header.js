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
    <div className="ypMenu">
      <ul className="header-links">
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
            to="/current-classes"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            current classes
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
            workshops-and-trainings
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
