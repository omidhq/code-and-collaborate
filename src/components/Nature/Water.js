import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { WaterData, AlternativeText } from "../../data/nature_data"

export default function EnergyAndEmission() {
  const sdgWidth = 95
  const sdgHeight = 95
  return (
    <div className="content-wrapper water">
      <div className="hose">
        <StaticImage
          src="../../images/nature/water.png"
          alt={WaterData.title}
        />
      </div>
      <div className="intro">
        <h3>{WaterData.title}</h3>
        <p>{WaterData.introPara1}</p>
        <p>{WaterData.introPara2}</p>
      </div>

      <div className="footsteps left">
        <h4>{WaterData.subHeading1}</h4>
        <p>{WaterData.footstep1}</p>
      </div>

      <div className="sdg">
        <h4>{WaterData.subHeading2}</h4>
        <StaticImage
          src="../../images/nature/sdg7.png"
          alt={AlternativeText.sdg7}
          width={sdgWidth}
          height={sdgHeight}
        />
        <StaticImage
          src="../../images/nature/sdg12.png"
          alt={AlternativeText.sdg12}
          width={sdgWidth}
          height={sdgHeight}
        />
        <StaticImage
          src="../../images/nature/sdg13.png"
          alt={AlternativeText.sdg13}
          width={sdgWidth}
          height={sdgHeight}
        />
        <StaticImage
          src="../../images/nature/sdg17.png"
          alt={AlternativeText.sdg17}
          width={sdgWidth}
          height={sdgHeight}
        />
      </div>
    </div>
  )
}
