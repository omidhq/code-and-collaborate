import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { EnergyData, AlternativeText } from "../../data/nature_data"

export default function EnergyEmission() {
  const sdgWidth = 95
  const sdgHeight = 95
  return (
    <div className="content-wrapper energy-emission">
      <div className="intro">
        <h3>{EnergyData.title}</h3>
        <p>{EnergyData.introPara1}</p>
        <p>{EnergyData.introPara2}</p>
        <p>{EnergyData.introPara3}</p>
      </div>

      <div className="windmills">
        <StaticImage
          src="../../images/nature/windenergy.png"
          alt={AlternativeText.windmill}
        />
      </div>
      <div className="sdg">
        <h4>{EnergyData.subHeading1}</h4>
        <StaticImage
          src="../../images/nature/sdg6.png"
          alt={AlternativeText.sdg6}
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
          src="../../images/nature/sdg15.png"
          alt={AlternativeText.sdg15}
          width={sdgWidth}
          height={sdgHeight}
        />
      </div>
      <div className="right footsteps">
        <h4>{EnergyData.subHeading2}</h4>
        <p>{EnergyData.footstep1}</p>
      </div>
    </div>
  )
}
