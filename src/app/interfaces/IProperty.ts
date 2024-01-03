export interface IProperty {
  name: string;
  group: string;
  cost: number;
  houseCost: number;
  maxHouses: number;
  rent: [number, number, number, number, number, number];
}

export interface IOwnedProperty {
  property: IProperty;
  houses: number;
}
