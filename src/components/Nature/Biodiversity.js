import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

import { BiodiversityData } from "../../data/nature_data"

export default function Biodiversity() {
  return (
    <>
      <div className="left-col">
        <Parallax y={[0, 20]} className="leaves">
          <StaticImage src="../../images/nature/leaves.png" />
        </Parallax>
        <StaticImage src="../../images/nature/hands.png" />
      </div>

      <div className="right-col">
        <h3>{BiodiversityData.title}</h3>
        <p>{BiodiversityData.introPara1}</p>
        <p>{BiodiversityData.introPara2}</p>
        <p>{BiodiversityData.introPara3}</p>
        <p>{BiodiversityData.introPara4}</p>
      </div>

      <div className="left-col">
        <h4>{BiodiversityData.subHeading1}</h4>
        <p>{BiodiversityData.footstep1}</p>
        <p>{BiodiversityData.footstep2}</p>
        <p>{BiodiversityData.footstep3}</p>
      </div>
      <div className="right-col">
        <h4>{BiodiversityData.subHeading2}</h4>
        <StaticImage src="../../images/nature/swiss-farms.png" />
      </div>
      <div className="left-col">
        <h4>{BiodiversityData.subHeading3}</h4>
      </div>
      <div></div>
    </>
  )
}
