import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

import { BiodiversityData, AlternativeText } from "../../data/nature_data"

export default function Biodiversity() {
  const sdgWidth = 95
  const sdgHeight = 95
  return (
    <div className="content-wrapper biodiversity">
      <div className="images">
        <Parallax y={[-60, 2]} x={[10, 10]} className="leaves">
          <StaticImage src="../../images/nature/leaves.png" />
        </Parallax>
        <Parallax x={[-20, 15]} className="holding-hands">
          <StaticImage src="../../images/nature/hands.png" />
        </Parallax>
      </div>

      <div className="intro">
        <h3>{BiodiversityData.title}</h3>
        <p>{BiodiversityData.introPara1}</p>
        <p>{BiodiversityData.introPara2}</p>
        <p>{BiodiversityData.introPara3}</p>
        <p>{BiodiversityData.introPara4}</p>
      </div>

      <div className="left footsteps">
        <h4>{BiodiversityData.subHeading1}</h4>
        <p>{BiodiversityData.footstep1}</p>
        <p>{BiodiversityData.footstep2}</p>
        <p>{BiodiversityData.footstep3}</p>
      </div>
      <div className="herb-farms">
        <h4>{BiodiversityData.subHeading2}</h4>
        <StaticImage
          src="../../images/nature/swiss-farms.png"
          alt={AlternativeText.SwissMap}
        />
      </div>

      <div className="sdg">
        <h4>{BiodiversityData.subHeading3}</h4>
        <StaticImage
          src="../../images/nature/sdg6.png"
          alt={AlternativeText.sdg6}
          width={sdgWidth}
          height={sdgHeight}
        />
        <StaticImage
          src="../../images/nature/sdg10.png"
          alt={AlternativeText.sdg10}
          width={sdgWidth}
          height={sdgHeight}
        />
        <StaticImage
          src="../../images/nature/sdg12.png"
          alt={AlternativeText.sdg12}
          width={sdgWidth}
          height={sdgHeight}
        />
      </div>
    </div>
  )
}
