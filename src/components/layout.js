/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

// import StaticIntro from './Intro/StaticIntro'
import ScrollTopArrow from "./ScrollTop/ScrollTopArrow"
import SubHeading from "./SubHeading/SubHeading"
import Hero from "../components/Hero/Hero"
import Header from "./header"

import "./layout.css"
import "./style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Hero />
      <ParallaxProvider>
        <SubHeading className="subheading nature" subHeadingText="Nature" />
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <StaticImage src="../images/hands.png" />
          <h1>Fuck this shit</h1>
        </Parallax>
        <h2>| | |</h2>
        <SubHeading className="subheading people" subHeadingText="People" />
      </ParallaxProvider>

      <ScrollTopArrow />
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
