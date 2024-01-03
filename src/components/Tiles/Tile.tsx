import TileCorner from "./TileCorner";
import TileProperty from "./TileProperty";
import TileSpecial from "./TileSpecial";

interface TileProps {
  type?: "corner" | "special" | "property";
  data: any;
  className?: string;
}

function Tile({ type = "property", data, className }: TileProps) {
  switch (type) {
    case 'corner':
      return <TileCorner className={className} />;
    case 'special':
      return <TileSpecial />;
    default:
      return <TileProperty tile={data} />;
  }
}

export default Tile;
