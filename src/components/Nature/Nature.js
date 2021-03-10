import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

import SubHeading from "../SubHeading/SubHeading"
import natureData from "./nature_data.json"

const Nature = () => {
  const content = JSON.parse(JSON.stringify(natureData))
  console.log(content)
  return (
    <>
      <SubHeading className="subheading nature" subHeadingText="Nature" />
      <div className="component-wrapper">
        <div className="left-col">
          <Parallax y={[-50, 80]} className="leaves">
            <StaticImage src="../../images/nature/leaves.png" />
            <StaticImage src="../../images/nature/hands.png" />
          </Parallax>
        </div>

        <div className="right-col">
          <h3>{content[0].heading}</h3>
          <p>{content[0].para1}</p>
          <p>{content[0].para2}</p>
          <p>{content[0].para3}</p>
          <p>{content[0].para4}</p>
        </div>
      </div>
    </>
  )
}

export default Nature
