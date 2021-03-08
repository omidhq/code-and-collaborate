import React from "react"
import { Parallax } from "react-scroll-parallax"

const SubHeading = props => {
  return (
    <div className={props.className}>
      <Parallax x={[-50, 80]} tagOuter="figure">
        <h2>{props.subHeadingText}</h2>
      </Parallax>
    </div>
  )
}

export default SubHeading
