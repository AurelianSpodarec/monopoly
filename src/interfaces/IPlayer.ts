import { IOwnedProperty } from "./IProperty";

export interface IPlayer {
  name: string;
  token: string;
  location: number;
  position: {
    x: 0,
    y: 0
  },
  money: number;
  properties: IOwnedProperty[];
}
