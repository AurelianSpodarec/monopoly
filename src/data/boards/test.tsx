import dataProperties from "../properties";

let dataBoardTest:any = [
  {
    ...dataProperties.brazil.cities.salvador,
  },
  {
    ...dataProperties.brazil.cities.rio,
  },
  {
    ...dataProperties.israel.cities.telAviv,
  },
  {
    ...dataProperties.israel.cities.haifa,
  },
  {
    ...dataProperties.israel.cities.jerusalem,
  },
  {
    ...dataProperties.italy.cities.venice,
  },
  {
    ...dataProperties.italy.cities.milan,
  },
  {
    ...dataProperties.italy.cities.rome,
  },
  {
    ...dataProperties.germany.cities.frankfurt,
  },
  {
    ...dataProperties.germany.cities.munich,
  },
  {
    ...dataProperties.germany.cities.berlin,
  },
  {
    ...dataProperties.usa.cities.sanFrancisco,
  },
]

function insertAtIndexAndShift(index, element) {
  dataBoardTest.splice(index, 0, element);
}

insertAtIndexAndShift(0, {
  name: "Start",
  type: "corner"
});

insertAtIndexAndShift(4, {
  name: "Prison",
  type: "corner",
});

insertAtIndexAndShift(8, {
  name: "Vaccation",
  type: "corner",
});

insertAtIndexAndShift(12, {
  name: "Go To Prison",
  type: "corner",
});

export default dataBoardTest;
