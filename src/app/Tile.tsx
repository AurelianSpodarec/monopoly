import TileCorner from "./Tiles/TileCorner"
import TileProperty from "./Tiles/TileProperty"

function Tile({ tile, type }: any) {

  function renderTile() {
    switch (tile.corner) {
      case "corner":
        return <TileCorner tile={tile} />
      default:
        return <TileProperty tile={tile} />
    }
  }

  return renderTile()
  
}

export default Tile
