import { Link } from "gatsby"
import Logo from "../components/image/logo"
import React from "react"

const Header = () => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <Logo alt="logo" filename="logo.png" />
      </Link>
    </h1>
  </header>
)

export default Header
