import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

import SubHeading from "../SubHeading/SubHeading"

export default function Nature() {
  return (
    <ParallaxProvider>
      <SubHeading className="subheading nature" subHeadingText="Nature" />
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <StaticImage src="../images/hands.png" />
      </Parallax>
      <h2>| | |</h2>
    </ParallaxProvider>
  )
}
