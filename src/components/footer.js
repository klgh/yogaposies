import React from "react"

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-links">
        <br />© {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{" "}
        by{" "}
        <a
          href="https://kaleighscruggs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          kaleigh
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
