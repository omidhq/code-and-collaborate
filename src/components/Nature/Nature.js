import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

import SubHeading from "../SubHeading/SubHeading"

export default function Nature() {
  return (
    <>
      <SubHeading className="subheading nature" subHeadingText="Nature" />
      <div className="wrapper">
        <Parallax y={[-50, 80]} className="leaves">
          <StaticImage src="../../images/nature/leaves.png" />
        </Parallax>
        <Parallax x={[-50, 80]} className="hands">
          <StaticImage src="../../images/nature/hands.png" />
        </Parallax>

        <h2>| | |</h2>
      </div>
    </>
  )
}
