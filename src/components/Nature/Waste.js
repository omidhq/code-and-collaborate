import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { WasteData, AlternativeText } from "../../data/nature_data"

export default function Waste() {
  const sdgWidth = 95
  const sdgHeight = 95
  return (
    <div className="content-wrapper waste">
      <div className="intro">
        <h3>{WasteData.title}</h3>
        <p>{WasteData.introPara1}</p>
        <p>{WasteData.introPara2}</p>
        <p>{WasteData.introPara3}</p>
        <p>{WasteData.introPara4}</p>
        <p>{WasteData.introPara5}</p>
      </div>
      <div className="cow-illustration">
        <h4>{WasteData.beyondZero}</h4>
        <StaticImage
          src="../../images/nature/cow.png"
          alt={AlternativeText.cow}
        />
      </div>

      <div className="sdg">
        <h4>{WasteData.subHeading1}</h4>
        <StaticImage
          src="../../images/nature/sdg8.png"
          alt={AlternativeText.sdg8}
          width={sdgWidth}
          height={sdgHeight}
        />
        <StaticImage
          src="../../images/nature/sdg9.png"
          alt={AlternativeText.sdg9}
          width={sdgWidth}
          height={sdgHeight}
        />
        <StaticImage
          src="../../images/nature/sdg12.png"
          alt={AlternativeText.sdg12}
          width={sdgWidth}
          height={sdgHeight}
        />
        <br />
        <StaticImage
          src="../../images/nature/sdg15.png"
          alt={AlternativeText.sdg15}
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
      <div className="footsteps right">
        <h4>{WasteData.subHeading2}</h4>
        <p>{WasteData.footstep1}</p>
        <p>{WasteData.footstep2}</p>
        <p>{WasteData.footstep3}</p>
        <p>{WasteData.footstep4}</p>
      </div>
    </div>
  )
}
