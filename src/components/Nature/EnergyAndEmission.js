import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { EnergyData } from "../../data/nature_data"

export default function EnergyAndEmission() {
  return (
    <>
      <div className="left-col">
        <h3>{EnergyData.title}</h3>
        <p>{EnergyData.introPara1}</p>
        <p>{EnergyData.introPara2}</p>
        <p>{EnergyData.introPara3}</p>
      </div>

      <div className="right-col">
        <StaticImage
          src="../../images/nature/windenergy.png"
          alt={EnergyData.title}
        />
      </div>
      <div>
        <h4>{EnergyData.subHeading1}</h4>
      </div>
      <div>
        <h4>{EnergyData.subHeading2}</h4>
        <p>{EnergyData.footstep1}</p>
      </div>
    </>
  )
}
