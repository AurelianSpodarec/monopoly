const dataCountries = [
  {
    id: "albania",
    continentId: 4,
    name: "Albania",
    // icon: <FlagAlbania />
  },
  {
    id: "andorra",
    continentId: 4,
    name: "Andorra",
    // icon: <FlagAndorra />
  },
  // {
  //   id: "austria",
  //   continentId: 4,
  //   name: "Austria",
  //   icon: <FlagAustria />
  // },
  // {
  //   id: "belarus",
  //   continentId: 4,
  //   name: "Belarus",
  //   icon: <FlagBelarus />
  // },
  // {
  //   id: "belgium",
  //   continentId: 4,
  //   name: "Belgium",
  //   icon: <FlagBelgium />
  // },
  // {
  //   id: "bosnia_and_herzegovina",
  //   continentId: 4,
  //   name: "Bosnia and Herzegovina",
  //   icon: <FlagBosniaAndHerzegovina />
  // },
  // {
  //   id: "bulgaria",
  //   continentId: 4,
  //   name: "Bulgaria",
  //   icon: <FlagBulgaria />
  // },
  // {
  //   id: "croatia",
  //   continentId: 4,
  //   name: "Croatia",
  //   icon: <FlagCroatia />
  // },
  // {
  //   id: "cyprus",
  //   continentId: 4,
  //   name: "Cyprus",
  //   icon: <FlagCyprus />
  // },
  // {
  //   id: "czech_republic",
  //   continentId: 4,
  //   name: "Czech Republic",
  //   icon: <FlagCzechRepublic />
  // },
  // {
  //   id: "denmark",
  //   continentId: 4,
  //   name: "Denmark",
  //   icon: <FlagDenmark />
  // },
  // {
  //   id: "estonia",
  //   continentId: 4,
  //   name: "Estonia",
  //   icon: <FlagEstonia />
  // },
  // {
  //   id: "finland",
  //   continentId: 4,
  //   name: "Finland",
  //   icon: <FlagFinland />
  // },
  // {
  //   id: "france",
  //   continentId: 4,
  //   name: "France",
  //   icon: <FlagFrance />
  // },
  // {
  //   id: "germany",
  //   continentId: 4,
  //   name: "Germany",
  //   icon: <FlagGermany />
  // },
  // {
  //   id: "greece",
  //   continentId: 4,
  //   name: "Greece",
  //   icon: <FlagGreece />
  // },
  // {
  //   id: "hungary",
  //   continentId: 4,
  //   name: "Hungary",
  //   icon: <FlagHungary />
  // },
  // {
  //   id: "iceland",
  //   continentId: 4,
  //   name: "Iceland",
  //   icon: <FlagIceland />
  // },
  // {
  //   id: "ireland",
  //   continentId: 4,
  //   name: "Ireland",
  //   icon: <FlagIreland />
  // },
  // {
  //   id: "italy",
  //   continentId: 4,
  //   name: "Italy",
  //   icon: <FlagItaly />
  // },
  // {
  //   id: "kosovo",
  //   continentId: 4,
  //   name: "Kosovo",
  //   icon: <FlagKosovo />
  // },
  // {
  //   id: "latvia",
  //   continentId: 4,
  //   name: "Latvia",
  //   icon: <FlagLatvia />
  // },
  // {
  //   id: "liechtenstein",
  //   continentId: 4,
  //   name: "Liechtenstein",
  //   icon: <FlagLiechtenstein />
  // },
  // {
  //   id: "lithuania",
  //   continentId: 4,
  //   name: "Lithuania",
  //   icon: <FlagLithuania />
  // },
  // {
  //   id: "luxembourg",
  //   continentId: 4,
  //   name: "Luxembourg",
  //   icon: <FlagLuxembourg />
  // },
  // {
  //   id: "malta",
  //   continentId: 4,
  //   name: "Malta",
  //   icon: <FlagMalta />
  // },
  // {
  //   id: "moldova",
  //   continentId: 4,
  //   name: "Moldova",
  //   icon: <FlagMoldova />
  // },
  // {
  //   id: "monaco",
  //   continentId: 4,
  //   name: "Monaco",
  //   icon: <FlagMonaco />
  // },
  // {
  //   id: "montenegro",
  //   continentId: 4,
  //   name: "Montenegro",
  //   icon: <FlagMontenegro />
  // },
  // {
  //   id: "netherlands",
  //   continentId: 4,
  //   name: "Netherlands",
  //   icon: <FlagNetherlands />
  // },
  // {
  //   id: "north_macedonia",
  //   continentId: 4,
  //   name: "North Macedonia",
  //   icon: <FlagNorthMacedonia />
  // },
  // {
  //   id: "norway",
  //   continentId: 4,
  //   name: "Norway",
  //   icon: <FlagNorway />
  // },
  // {
  //   id: "poland",
  //   continentId: 4,
  //   name: "Poland",
  //   icon: <FlagPoland />
  // },
  // {
  //   id: "portugal",
  //   continentId: 4,
  //   name: "Portugal",
  //   icon: <FlagPortugal />
  // },
  // {
  //   id: "romania",
  //   continentId: 4,
  //   name: "Romania",
  //   icon: <FlagRomania />
  // },
  // {
  //   id: "russia",
  //   continentId: 4,
  //   name: "Russia",
  //   icon: <FlagRussia />
  // },
  // {
  //   id: "san_marino",
  //   continentId: 4,
  //   name: "San Marino",
  //   icon: <FlagSanMarino />
  // },
  // {
  //   id: "serbia",
  //   continentId: 4,
  //   name: "Serbia",
  //   icon: <FlagSerbia />
  // },
  // {
  //   id: "slovakia",
  //   continentId: 4,
  //   name: "Slovakia",
  //   icon: <FlagSlovakia />
  // },
  // {
  //   id: "slovenia",
  //   continentId: 4,
  //   name: "Slovenia",
  //   icon: <FlagSlovenia />
  // },
  // {
  //   id: "spain",
  //   continentId: 4,
  //   name: "Spain",
  //   icon: <FlagSpain />
  // },
  // {
  //   id: "sweden",
  //   continentId: 4,
  //   name: "Sweden",
  //   icon: <FlagSweden />
  // },
  // {
  //   id: "switzerland",
  //   continentId: 4,
  //   name: "Switzerland",
  //   icon: <FlagSwitzerland />
  // },
  // {
  //   id: "ukraine",
  //   continentId: 4,
  //   name: "Ukraine",
  //   icon: <FlagUkraine />
  // },
  // {
  //   id: "united_kingdom",
  //   continentId: 4,
  //   name: "United Kingdom",
  //   icon: <FlagUnitedKingdom />
  // },
  // {
  //   id: "vatican_city",
  //   continentId: 4,
  //   name: "Vatican City",
  //   icon: <FlagVaticanCity />
  // }
];

export default dataCountries;
