import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

import SubHeading from "../SubHeading/SubHeading"

export default function Nature() {
  return (
    <>
      <SubHeading className="subheading nature" subHeadingText="Nature" />
      <div className="wrapper">
        <Parallax
          offsetYMax={150}
          offsetYMin={-50}
          offsetXMax={-40}
          offsetXMin={20}
          className="hands"
        >
          <StaticImage src="../../images/nature/hands.png" />
        </Parallax>
        <Parallax
          offsetYMax={150}
          offsetYMin={-50}
          offsetXMax={40}
          offsetXMin={-20}
        >
          <StaticImage src="../../images/nature/leaves.png" />
        </Parallax>

        <h2>| | |</h2>
      </div>
    </>
  )
}
