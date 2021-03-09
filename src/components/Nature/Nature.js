import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

import SubHeading from "../SubHeading/SubHeading"
import data from "../../data/data.json"

const Nature = data.map(data => {
  return (
    <>
      <SubHeading className="subheading nature" subHeadingText="Nature" />
      <div className="wrapper">
        <div className="left-col">
          <Parallax y={[-50, 80]} className="leaves">
            <StaticImage src="../../images/nature/leaves.png" />
          </Parallax>

          <Parallax x={[-50, 80]} className="hands">
            <StaticImage src="../../images/nature/hands.png" />
          </Parallax>
        </div>
        <h3>{data.heading}</h3>
        <div className="right-col"></div>
      </div>
    </>
  )
})

export default Nature
