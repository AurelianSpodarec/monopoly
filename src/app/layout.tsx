import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FlagBrazil, FlagIsrael } from './flags';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

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
  type: "corner"| "card" | "property" | "tax" | "suprise" | "communityChest" | "airport",
  name: string;
  rent?: number[],
  price?: number;
  houseCost?: number;
  hotelCost?: number;
  country?: string;
  amount?: string;
}

const boardData:Tile[] = [
  {
    type: "corner",
    name: "Start"
  },
  {
    type: "property",
    country: "brazil",
    name: "Salvador",
    price: 60,
    rent: [2, 10, 30, 90, 160, 250],
    houseCost: 50,
    hotelCost: 50,
  },
  {
    type: "communityChest",
    name: "Tresure",
  },
  {
    type: "property",
    country: "brazil",
    name: "Rio",
    price: 60,
    rent: [4, 20, 60, 180, 320, 450],
    houseCost: 50,
    hotelCost: 50,
  },
  {
    type: "tax",
    name: "Income Tax",
    amount: "10%"
  },
  { 
    type: "airport", 
    ...dataAirports[0],
    ...airportInfo
  },
  // {
  //   type: "airport",
  //   name: "TVL Airport",
  //   price: 200,
  //   rent: [25, 50, 100, 200]
  // },
  {
    type: "property",
    country: "israel",
    name: "Tel Aviv",
    price: 100,
    rent: [6, 30, 90, 270, 400, 550],
    houseCost: 50,
    hotelCost: 50,
  },
  {
    type: "suprise",
    name: "Suprise",
  },
  {
    type: "property",
    country: "israel",
    name: "Haifa",
    price: 100,
    rent: [6, 30, 90, 270, 400, 550],
    houseCost: 50,
    hotelCost: 50,
  },
  {
    type: "property",
    country: "israel",
    name: "Jerusalem",
    price: 120,
    rent: [8, 40, 100, 300, 450, 600],
    houseCost: 50,
    hotelCost: 50,
  },
  {
    type: "corner",
    name: "Passing By - Jail",
  }
]

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
