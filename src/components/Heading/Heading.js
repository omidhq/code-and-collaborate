import React from "react"
import { Parallax } from "react-scroll-parallax"

const copy = "Nature".split("")

const Heading = props => {
  return (
    <div className={props.className}>
      <h2>
        {copy.map((letter, i) => (
          <Parallax key={`copy-${i}`} x={[-50 * i, 50 * i]} className="letters">
            {letter}
          </Parallax>
        ))}
      </h2>
    </div>
  )
}

export default Heading
