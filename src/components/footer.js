import React from "react"

const Footer = () => (
  <div>
    <div className="footer">
      <div className="footer-links">
        <br />© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank">
          Gatsby
        </a>{" "}
        by{" "}
        <a href="https://kaleighscruggs.com/" target="_blank">
          kaleigh
        </a>
      </div>
    </div>
  </div>
)

export default Footer
