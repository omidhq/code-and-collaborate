import { Link } from "gatsby"
import Logo from '../components/image/logo'
import React from "react"

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `1.45rem 0`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo alt="logo" filename="logo.png" />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
