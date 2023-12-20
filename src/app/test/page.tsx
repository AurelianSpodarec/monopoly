'use client'

import dataBoardClassic from "@/gameData/board";
import database from "@/utility/database";
import { useEffect, useState } from "react";
import TileProperty from "../room/_components/Tiles/TileProperty";
import TileCorner from "../room/_components/Tiles/TileCorner";
import TileSpecial from "../room/_components/Tiles/TileSpecial";
import Tile from "../room/_components/Tiles/Tile";

function Board({ data }) {
  const [board, setBoard] = useState([data])

  // const renderTile = (item, index, className, direction) => {
  //   switch (item.type) {
  //     case 'corner':
  //       return <TileCorner key={index} className={className} />;
  //     case 'special':
  //       return <TileSpecial key={index} />;
  //     default:
  //       return <TileProperty key={index} tile={item} direction={direction} />;
  //   }
  // };

  useEffect(() => {
    if(data)
    setBoard(database.compileBoard(data))
  }, [data])

  if(!board) return <div>No Boaard data</div>
  return (
    <div className="board">
      {board.map((item => {
        return <Tile data={item} type={item.type} />
      }))}
    </div>
  )
}

function PageRoom() {
  return (
    <div>
      <Board data={dataBoardClassic} />
    </div>
  )
}

export default PageRoom;
