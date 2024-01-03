export interface IBoard {
  corners: Array<{
    name: string;
    type: "go" | "jail" | "free-parking" | "go-to-jail";
  }>;
  properties?: any;
}
