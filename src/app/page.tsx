'use client'


import Image from 'next/image'

import { FlagBrazil, FlagFrance, FlagIsrael } from './flags';
import dataProperties from '../data/properties';
import { dataTransport } from '../data/transport';
import { dataTax } from '../data/tax';
import IconEditCheck from './IconEditCheck';

// Idea: Capitalist, Socialist, Communism
// Events: Differen countires subject to different events, suprise

interface Property {
  country: string;
  rent: number[];
  price?: number;
  houseCost: number;
  hotelCost: number;
}

interface Tile {
  type: "corner" | "card" | "property" | "tax" | "suprise" | "communityChest" | "airport",
  name: string;
  rent?: number[],
  price?: number;
  houseCost?: number;
  hotelCost?: number;
  country?: string;
  amount?: string;
}

const dataCompanies = {
  price: 150,
  rent: [4, 10],
  properties: [
    {
      name: "Electric Company"
    },
    {
      name: "Water Company"
    }
  ]
}

const dataSpecial = {
  start: {
    name: "Go"
  },
  prison: {
    name: "Prison"
  },
  vacation: {
    name: "Vacation",
  },
  goToJail: {
    name: "Go to Jail"
  }
}

const dataBoard: any = [
  {
    name: "GO"
  },
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
  {
    name: "Prison",
  },
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
  {
    name: "Vacation"
  },
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
  {
    name: "Go to prison"
  },
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

// Divide board by 4
// 10tiles per row, that means add corner before, and after

function Row() {
  return (
    <div>

    </div>
  )
}


interface Tile {
  tile: any;
  direction: "reverse";
}

// Tile: Property, Chest, Suprise, Tax, Transport
function Tile({ tile, direction, reverse }: any) {

  const directions: any = {
    left: "[writing-mode:vertical-rl] rotate-180",
    right: "[writing-mode:vertical-lr] rotate-270"
  }

  const flagDirection: any = {
    left: "rotate-90",
    right: "rotate-90 "
  }

  return (
    <div className={`
      flex items-center text-white bg-[#262a4c] cursor-pointer justify-between rounded-lg relative flex-col 
      ${reverse ? "flex-col-reverse" : "flex-col"}
      ${direction && directions[direction]}
    `}
      style={{ blockSize: "6.5rem", flex: "1 0 0", minInlineSize: "4.25rem" }}
    >

      <div className="absolute overflow-hidden flex items-center justify-center top-0 right-0 bottom-0 left-0 opacity-20 pointer-events-none" style={{ borderRadius: "inherit" }}>
        <div className={`blur-sm inset-0 items-center flex justify-center absolute cheat-svg-icon ${direction && flagDirection[direction]}`}>
          {tile.icon}
        </div>
      </div>

      <div className={`z-10 flex items-center flex-col ${reverse ? "flex-col-reverse" : "flex-col"}`}>
        <div className={`h-8 w-8 rounded-full overflow-hidden ${direction && flagDirection[direction]}`} style={{ marginBlockEnd: "-1rem", marginBlockStart: "-1rem" }}>
          {tile.icon}
        </div>
        <div className="items-center leading-3" style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem", textShadow: "0 0 0.5em #262a4c" }}>
          <p>{tile?.name}</p>
        </div>
      </div>
      <div className="bg-white/20 py-1 text-white px-2 m-1 font-semibold rounded text-xs">
        280$
      </div>

    </div>
  )
}




function Board() {
  return (
    <div>

      <div className='flex'>
        <Tile
          tile={{
            name: "Paris",
            icon: <FlagFrance />
          }}
        />
        <Tile
          reverse
          tile={{
            name: "Paris",
            icon: <FlagFrance />
          }}
        />
      </div>
      <div className="flex flex-col">
        <Tile
          direction="left"
          tile={{
            name: "Paris",
            icon: <FlagFrance />
          }}
        />
        <Tile
          direction="left"
          tile={{
            name: "Paris",
            icon: <FlagFrance />
          }}
        />
      </div>
      <div className="flex flex-col">
        <Tile
          reverse
          direction="right"
          tile={{
            name: "Paris",
            icon: <FlagFrance />
          }}
        />
        <Tile
          reverse
          direction="right"
          tile={{
            name: "Paris",
            icon: <FlagFrance />
          }}
        />
      </div>
    </div>
  )
}


// function Board() {
//   console.log("hi", dataBoard);

//   // Function to determine the class based on the index
//   const getRowClass = (index: number) => {
//     const rowNumber = Math.floor(index / 10) + 1;

//     switch (rowNumber) {
//       case 1:
//         return 'top';
//       case 2:
//         return 'right';
//       case 3:
//         return 'bottom';
//       default:
//         return 'left';
//     }
//   };

//   const getTileClass = (index: number) => {
//     if ((index + 1) % 10 === 1) {
//       const cornerIndex = Math.floor(index / 10);
//       switch (cornerIndex) {
//         case 0:
//           return 'start';
//         case 1:
//           return 'prison';
//         case 2:
//           return 'vacation';
//         case 3:
//           return 'gotoprison';
//         default:
//           return '';
//       }
//     }
//     return '';
//   };

//   return (
//     <div className="grid justify-evenly max-w-3lg board">
//       {dataBoard.map((tile: any, index: number) => {
//         const tileClass = getTileClass(index);

//         // If index is a multiple of 10, add a div with specific class
//         if (index % 10 === 0) {
//           const rowClass = getRowClass(index);
//           const tilesInRow = dataBoard.slice(index, index + 10);

//           return (
//             <div key={index} className={`row board-${rowClass} ${tileClass}`}>
//               {tilesInRow.map((tileInRow: any, tileIndex: number) => 
//                 <Tile key={tileIndex} tile={tileInRow} className={tileClass} />
//               )}
//             </div>
//           );
//         }

//         return null; // Skip rendering for other indexes
//       })}
//     </div>
//   );
// }





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#130f1d]">
      <Board />
    </main>
  )
}
