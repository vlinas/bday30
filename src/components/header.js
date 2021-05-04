import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import numbers from '../images/30.png'

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex">
      <h1>
        <Link to="/">
        🍾🍺🍸
        </Link>
      </h1>
      <Link to="/">
      <img src={numbers}/>
      </Link>
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
