'use client'


import Image from 'next/image'

import { FlagBrazil, FlagIsrael } from './flags';
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
    name: "Suprise",
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

function Tile({ tile }: any) {
  return (
    <div className="flex items-center justify-between rounded-lg relative flex-col overflow-hidden" style={{ blockSize: "6.5rem", flex: "1 0 0" }}>
      {/* <div>Colors</div> */}
      <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 opacity-20 pointer-events-none">
        <div className="blur-sm inset-0 items-center flex justify-center absolute cheat-svg-icon">
          {tile.icon}
        </div>
      </div>
      <img src={tile.icon} />

      <div className="z-20">
        {/* <div>
          100$
        </div> */}
        <p>{tile?.name}</p>
        <div className="h-8 w-8 rounded-full overflow-hidden">
          {tile.icon}

        </div>
      </div>
    </div>
  )
}

function Board() {
  console.log("hi", dataBoard)
  return (
    <div className="flex justify-evenly max-w-3lg">
      {dataBoard.map((tile) => {
        return <Tile tile={tile} />
      })}
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#130f1d]">
      <Board />
    </main>
  )
}
