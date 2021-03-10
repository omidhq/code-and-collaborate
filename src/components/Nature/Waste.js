import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { WasteData } from "../../data/nature_data"

export default function Waste() {
  return (
    <>
      <div className="right-col">
        <StaticImage
          src="../../images/nature/cow.png"
          alt="An illustration of a cow with a bubble that says Beyond Zero"
        />
      </div>
      <div className="left-col">
        <h3>{WasteData.title}</h3>
        <p>{WasteData.introPara1}</p>
        <p>{WasteData.introPara2}</p>
        <p>{WasteData.introPara3}</p>
        <p>{WasteData.introPara4}</p>
        <p>{WasteData.introPara5}</p>
      </div>

      <div>
        <h4>{WasteData.subHeading1}</h4>
      </div>
      <div className="right-col">
        <h4>{WasteData.subHeading2}</h4>
        <p>{WasteData.footstep1}</p>
        <p>{WasteData.footstep2}</p>
        <p>{WasteData.footstep3}</p>
        <p>{WasteData.footstep4}</p>
      </div>
    </>
  )
}
