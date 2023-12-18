import dataProperties from "@/data/properties";
import { dataTransport } from "@/data/transport";
import IconEditCheck from "../icons/IconEditCheck";


const dataBoardClassic: any = [
  {
    ...dataProperties.brazil,
    ...dataProperties.brazil.properties[0],
  },
  {
    type: "communityChest",
    name: "Tresure",
    icon: "./images/chest.png"
  },
  {
    ...dataProperties.brazil,
    ...dataProperties.brazil.properties[1],
  },
  {
    name: "Income Tax",
    icon: <IconEditCheck />
  },
  {
    icon: dataTransport.icon,
    ...dataTransport.properties[0],
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.properties[0],
  },
  {
    name: "Suprise",
    icon: "./images/question-mark.png"
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.properties[1],
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.properties[2],
  },
  // {
  //   name: "Prison",
  // },
  {
    ...dataProperties.italy,
    ...dataProperties.italy.properties[0],
  },
  {
    name: "Company"
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
    icon: dataTransport.icon,
    ...dataTransport.properties[1]
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.properties[0],
  },
  {
    name: "Chest",
    icon: "./images/chest.png"
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.properties[1],
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.properties[2],
  },
  // {
  //   name: "Vacation"
  // },
  {
    ...dataProperties.china,
    ...dataProperties.china.properties[0],
  },
  {
    name: "Suprise",
    icon: "./images/question-mark.png"
  },
  {
    ...dataProperties.china,
    ...dataProperties.china.properties[1],
  },
  {
    ...dataProperties.china,
    ...dataProperties.china.properties[2],
  },
  {
    icon: dataTransport.icon,
    ...dataTransport.properties[2]
  },
  {
    ...dataProperties.france,
    ...dataProperties.france.properties[0],
  },
  {
    ...dataProperties.france,
    ...dataProperties.france.properties[1],
  },
  {
    name: "Company"
  },
  {
    ...dataProperties.france,
    ...dataProperties.france.properties[2],
  },
  // {
  //   name: "Go to prison"
  // },
  {
    ...dataProperties.england,
    ...dataProperties.england.properties[0],
  },
  {
    ...dataProperties.england,
    ...dataProperties.england.properties[1],
  },
  {
    name: "Chest",
    icon: "./images/chest.png"
  },
  {
    ...dataProperties.england,
    ...dataProperties.england.properties[2],
  },
  {
    icon: dataTransport.icon,
    ...dataTransport.properties[3]
  },
  {
    name: "Suprise",
    icon: "./images/question-mark.png"
  },
  {
    ...dataProperties.usa,
    ...dataProperties.usa.properties[0]
  },
  {
    name: "Luxury Tax",
  },
  {
    ...dataProperties.usa,
    ...dataProperties.usa[1]
  }
]

export default dataBoardClassic;
