import dataProperties from "../properties";

const dataBoardTest = [
  {
    ...dataProperties.brazil,
    ...dataProperties.brazil.properties[0],
  },
  {
    ...dataProperties.brazil,
    ...dataProperties.brazil.properties[1],
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.properties[0],
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.properties[1],
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.properties[2],
  },
  {
    ...dataProperties.italy,
    ...dataProperties.italy.properties[0],
  },
  {
    ...dataProperties.italy,
    ...dataProperties.italy.properties[1],
  },
  {
    ...dataProperties.italy,
    ...dataProperties.italy.properties[2],
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.properties[0],
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.properties[1],
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.properties[2],
  },
  {
    ...dataProperties.usa,
    ...dataProperties.usa.properties[0],
  },
]

export default dataBoardTest;
