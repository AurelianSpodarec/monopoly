
interface Transport {
  name: string;
  price?: number;
  rent?: number[]
  properties: {
    name: string;
  }[]
}

export const dataTransport: Transport = {
  name: "Airport",
  price: 200,
  rent: [25, 50, 100, 200],
  properties: [
    {
      name: "TVL Airport",
    },
    {
      name: "MUC Airport",
    },
    {
      name: "CDG Airport",
    },
    {
     name: "JFK Airport",
    }
  ]
}