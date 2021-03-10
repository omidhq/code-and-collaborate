import React from "react"

import Heading from "../Heading/Heading"
import Biodiversity from "./Biodiversity"
import EnergyAndEmission from "./EnergyAndEmission"
import Water from "./Water"
import Waste from "./Waste"

const Nature = () => {
  return (
    <>
      <Heading className="heading nature" />
      <Biodiversity />
      <EnergyAndEmission />
      <Water />
      <Waste />
    </>
  )
}

export default Nature
