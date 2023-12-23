// const dataBoardClassic = [
//   dataCorners.start,
//   dataCities.salvador,
//   dataSpecial.chest,
//   dataCities.rio,
//   dataTax.incomeTax,
//   // dataTransportTypes.airport.tvl, // could be ship, airpor, railway; each different name
//   dataCities.telAviv,
//   dataSpecial.suprise,
//   dataCities.haifa,
//   dataCities.jerusalem,
//   dataCorners.jail
// ]


const dataBoardClassic = [
  {
    type: "corner",
    id: "start",
  },
  {
    type: "property",
    id: "salvador",
    countryId: "brazil",
  },
  {
    type: "special",
    id: "chest",
  },
  {
    type: "property",
    id: "rio",
    countryId: "brazil",
  },
  {
    type: "tax",
    id: "incomeTax"
  },
  {
    type: "transport",
    id: "tvl"
  },  
  {
    type: "property",
    id: "telAviv",
    countryId: "israel",
  },
  {
    type: "special",
    id: "suprise"
  },
  {
    type: "property",
    id: "haifa",
    countryId: "israel",
  },
  {
    type: "property",
    id: "jerusalem",
    countryId: "israel",
  },
  {
    type: "corner",
    id: "jail"
  }
]

export default dataBoardClassic;
