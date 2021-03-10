import React from "react"

import SubHeading from "../SubHeading/SubHeading"
import Biodiversity from "./Biodiversity"
import EnergyAndEmission from "./EnergyAndEmission"
import Water from "./Water"
import Waste from "./Waste"

const Nature = () => {
  return (
    <>
      <SubHeading className="subheading nature" subHeadingText="Nature" />
      <div className="component-wrapper">
        <Biodiversity />
        <EnergyAndEmission />
        <Water />
        <Waste />
      </div>
    </>
  )
}

export default Nature
