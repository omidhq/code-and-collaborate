import React from "react"

import Heading from "../Heading/Heading"
import Biodiversity from "./Biodiversity"
import EnergyEmission from "./EnergyEmission"
import Water from "./Water"
import Waste from "./Waste"

const Nature = () => {
  return (
    <>
      <Heading className="heading nature" />
      <Biodiversity />
      <EnergyEmission />
      <Water />
      <Waste />
    </>
  )
}

export default Nature
