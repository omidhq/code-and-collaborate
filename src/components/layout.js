/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import RicolaVideo from '../images/ricola-video.mp4'

import StaticIntro from './Intro/StaticIntro'
import ScrollTopArrow from "./ScrollTop/ScrollTopArrow"
import SubHeading from "./SubHeading/SubHeading"
import Hero from "./Hero/Hero"
import Header from "./header"

import "./layout.css"
import "./style.css"

const Layout = ({ children }) => {
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  }

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
      <Hero src={RicolaVideo} />
      <StaticIntro />
      <SubHeading className="subheading nature" subHeadingText="Nature" />
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
