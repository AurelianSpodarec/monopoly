
interface Tax {
  name: string;
  options: {
    name: string;
    amount: {
      price: number;
      type: "percentage" | "flat"
    };
  }[]
}

export const dataTax: Tax = {
  name: "Tax",
  options: [
    {
      name: "Income Tax",
      amount: {
        price: 20,
        type: "percentage"
      }
    },
    {
      name: "Luxury Tax",
      amount: {
        price: 75,
        type: "flat"
      }
    },
  ]
}