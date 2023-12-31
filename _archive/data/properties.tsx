import { FlagAmerica, FlagBrazil, FlagChina, FlagEngland, FlagFrance, FlagGermany, FlagIsrael, FlagItaly } from "../../_archive/icons/flags";

interface City {
  name: string;
}

interface Country {
  [key: string]: {
    name: string;
    icon: JSX.Element;
    cities: {
      [key: string]: City;
    };
  };
}

const dataProperties: Country = {
  brazil: {
    name: "Brazil",
    icon: <FlagBrazil />,
    cities: {
      salvador: {
        name: "Salvador",
      },
      rio: {
        name: "Rio"
      }
    }
  },
  israel: {
    name: "Israel",
    icon: <FlagIsrael />,
    cities: {
      telAviv: {
        name: "Tel Aviv"
      },
      haifa: {
        name: "Haifa"
      },
      jerusalem: {
        name: "Jerusalem"
      }
    }
  },
  italy: {
    name: "Italy",
    icon: <FlagItaly />,
    cities: {
      venice: {
        name: "Venice"
      },
      milan: {
        name: "Milan"
      },
      rome: {
        name: "Rome"
      }
    }
  },
  germany: {
    name: "Germany",
    icon: <FlagGermany />,
    cities: {
      frankfurt: {
        name: "Frankfurt"
      },
      munich: {
        name: "Munich"
      },
      berlin: {
        name: "Berlin"
      }
    }
  },
  china: {
    name: "China",
    icon: <FlagChina />,
    cities: {
      shenzhen: {
        name: "Shenzhen"
      },
      beijing: {
        name: "Beijing"
      },
      shanghai: {
        name: "Shanghai"
      }
    }
  },
  france: {
    name: "France",
    icon: <FlagFrance />,
    cities: {
      lyon: {
        name: "Lyon"
      },
      toulouse: {
        name: "Toulouse"
      },
      paris: {
        name: "Paris"
      }
    }
  },
  england: {
    name: "Great Britain",
    icon: <FlagEngland />,
    cities: {
      liverpool: {
        name: "Liverpool"
      },
      manchester: {
        name: "Manchester"
      },
      london: {
        name: "London"
      }
    }
  },
  usa: {
    name: "America",
    icon: <FlagAmerica />,
    cities: {
      sanFrancisco: {
        name: "San Francisco"
      },
      newYork: {
        name: "New York"
      }
    }
  },
};




// const dataProperties:any = {
//   brazil: {
//     icon: <FlagBrazil />,
//     properties: [
//       {
//         name: "Salvador",
//       },
//       {
//         name: "Rio"
//       }
//     ]
//   },

//   const dataProperties:any = {
//     brazil: {
//       icon: <FlagBrazil />,
//       cities: {
//         salvador: {
//           name: "Salvador",
//         },
//         rio: {
//           name: "Rio"
//         }
//       }
//     },
//     france:{
//       // code...
//     }




// const dataProperties:any = {
//   brazil: {
//     icon: <FlagBrazil />,
//     properties: [
//       {
//         name: "Salvador",
//       },
//       {
//         name: "Rio"
//       }
//     ]
//   },
//   israel: {
//     icon: <FlagIsrael />,
//     properties: [
//       {
//         name: "Tel Aviv"
//       },
//       {
//         name: "Haifa"
//       },
//       {
//         name: "Jerusalem"
//       },
//     ],
//   },
//   italy: {
//     icon: <FlagItaly />,
//     properties: [
//       {
//         name: "Venice"
//       },
//       {
//         name: "Milan"
//       },
//       {
//         name: "Rome"
//       },
//     ],
//   },
//   germany: {
//     icon: <FlagGermany />,
//     properties: [
//       {
//         name: "Frankfurt"
//       },
//       {
//         name: "Munich"
//       },
//       {
//         name: "Berlin"
//       },
//     ],
//   },
//   china: {
//     icon: <FlagChina />,
//     properties: [
//       {
//         name: "Shenzhen"
//       },
//       {
//         name: "Beijing"
//       },
//       {
//         name: "Shanghai"
//       },
//     ],
//   },
//   france: {
//     icon: <FlagFrance />,
//     properties: [
//       {
//         name: "Lyon"
//       },
//       {
//         name: "Toulouse"
//       },
//       {
//         name: "Paris"
//       },
//     ],
//   },
//   england: {
//     icon: <FlagEngland />,
//     properties: [
//       {
//         name: "Liverpool"
//       },
//       {
//         name: "Manchester"
//       },
//       {
//         name: "London"
//       },
//     ],
//   },
//   usa: {
//     icon: <FlagAmerica />,
//     properties: [
//       {
//         name: "San Francisco"
//       },
//       {
//         name: "New York"
//       },
//     ],
//   },
// };


// const dataProperties = [
// {
//   name: "Salvador",
//   countryId: "brazil",
// },
// {
//   name: "Rio",
//   countryId: "brazil",
// },
//   {
//     name: "Tel Aviv",
//     countryId: "israel",
//   },
//   {
//     name: "Haifa",
//     countryId: "israel",
//   },
//   {
//     name: "Jerusalem",
//     countryId: "israel",
//   },
//   {
//     name: "Venice",
//     countryId: "italy",
//   },
//   {
//     name: "Milan",
//     countryId: "italy",
//   },
//   {
//     name: "Rome",
//     countryId: "italy",
//   },
//   {
//     name: "Frankfurt",
//     countryId: "germany",
//   },
//   {
//     name: "Munich",
//     countryId: "germany",
//   },
//   {
//     name: "Berlin",
//     countryId: "germany",
//   },
//   {
//     name: "Shenzhen",
//     countryId: "china",
//   },
//   {
//     name: "Beijing",
//     countryId: "china",
//   },
//   {
//     name: "Shanghai",
//     countryId: "china",
//   },
//   {
//     name: "Lyon",
//     countryId: "france",
//   },
//   {
//     name: "Toulouse",
//     countryId: "france",
//   },
//   {
//     name: "Paris",
//     countryId: "france",
//   },
//   {
//     name: "Liverpool",
//     countryId: "england",
//   },
//   {
//     name: "Manchester",
//     countryId: "england",
//   },
//   {
//     name: "London",
//     countryId: "england",
//   },
//   {
//     name: "San Francisco",
//     countryId: "usa",
//   },
//   {
//     name: "New York",
//     countryId: "usa",
//   }
// ]

export default dataProperties;
