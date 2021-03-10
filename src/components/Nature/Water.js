import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { WaterData } from "../../data/nature_data"

export default function EnergyAndEmission() {
  return (
    <div className="content-wrapper">
      <div className="left-col">
        <StaticImage
          src="../../images/nature/water.png"
          alt={WaterData.title}
        />
      </div>
      <div className="right-col">
        <h3>{WaterData.title}</h3>
        <p>{WaterData.introPara1}</p>
        <p>{WaterData.introPara2}</p>
      </div>

      <div>
        <h4>{WaterData.subHeading1}</h4>
      </div>
      <div>
        <h4>{WaterData.subHeading2}</h4>
        <p>{WaterData.footstep1}</p>
      </div>
    </div>
  )
}
