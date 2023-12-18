import dataBoardTest from "@/data/boards/test";
import TileProperty from "../Tiles/TileProperty";


function Board() {
  return (
    <div className="board border border-red-600">
      {dataBoardTest.map((item, index) => {
        return (
          <TileProperty tile={item} />
        )
      })}
    </div>
  )
}

export default Board;
