import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Outro.css"

const Outro = () => {
  return (
    <div className="outroWrapper">
      <h3 className="outroHeading">FOLLOW OUR JOURNEY</h3>
      <p className="textWrapper">
        These are overview maps with stats regarding waste and recycling within
        Ricola to give a picture on where we are and where we are moving
        towards. We are aiming for furhter imporvements right now 2021 and till
        the year 2023. Stay Tuned for further information so you can get
        inspired by our work. Follow our footsteps.
      </p>
      <StaticImage
        src="../../images/recycling-target.png"
        className="outroImage"
      />
      <StaticImage
        src="../../images/production-target.png"
        className="outroImage"
      />
    </div>
  )
}

export default Outro
