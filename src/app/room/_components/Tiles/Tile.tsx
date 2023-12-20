import TileCorner from "./TileCorner";
import TileProperty from "./TileProperty";
import TileSpecial from "./TileSpecial";

function Tile({ type, data }) {
  switch (type) {
    case 'corner':
      return <TileCorner />;
    case 'special':
      return <TileSpecial />;
    default:
      return <TileProperty tile={data} />;
  }
}

export default Tile;
