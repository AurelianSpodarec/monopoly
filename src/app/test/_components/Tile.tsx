import TileCorner from "@/app/room/_components/Tiles/TileCorner"
import TileProperty from "@/app/room/_components/Tiles/TileProperty"

function Tile({ tile, type }: any) {

  function renderTile() {
    switch (tile.type) {
      case "corner":
        return <TileCorner tile={tile} />
      default:
        return <TileProperty tile={tile} />
    }
  }

  return renderTile()
  
}

export default Tile
