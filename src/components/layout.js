/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

// import StaticIntro from './Intro/StaticIntro'

import RicolaVideo from "../images/ricola-video.mp4"

import StaticIntro from "./Intro/StaticIntro"
import ScrollTopArrow from "./ScrollTop/ScrollTopArrow"
import Header from "./header"
import Hero from "./Hero/Hero"
import Nature from "./Nature/Nature"
import Outro from "./Outro/Outro"

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
      <ParallaxProvider>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Hero src={RicolaVideo} />

        <StaticIntro />
        <Nature />
        <ScrollTopArrow />
        <Outro />
        {children}
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </ParallaxProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Layout
