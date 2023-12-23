'use client'

import dataBoardClassic from "@/gameData/board";
// import database from "@/utility/database";
import React, { useEffect, useState } from "react";
// import TileProperty from "../room/_components/Tiles/TileProperty";
// import TileCorner from "../room/_components/Tiles/TileCorner";
import TileSpecial from "../room/_components/Tiles/TileSpecial";
// import Tile from "../room/_components/Tiles/Tile";


const dataBoard = {
  tiles: [
    {
      type: 'property',
      group: 'brown',
      name: 'Mediterranean Avenue'
    },
    {
      type: 'chest',
      name: "Chest"
    },
    {
      type: 'property',
      group: 'brown',
      name: 'Baltic Avenue'
    },
    {
      type: 'pay',
      name: 'Income Tax'
    },
    {
      type: 'property',
      name: "San Francisco"
    },
    {
      type: "property",
      name: "New York"
    },
    {
      type: 'suprise',
      name: 'Suprise'
    },
    {
      type: 'pay',
      name: "Luxury Tax"
    },
    {
      type: "property",
      name: "Milano"
    }
  ],
  corners: [
    {
      id: "start",
      type: 'corner',
      name: "Go"
    },
    {
      id: "jail",
      type: 'corner',
      name: "Jail",
    },
    {
      id: "sleep",
      type: "corner",
      name: "Vaccation"
    },
    {
      id: "gotojail",
      type: "corner",
      name: "Go To Jail"
    }
  ]
}

// Board state
class BoardModel extends React.Component {

  createCorner() {

  }

  createRow() {

  }

  createTile() {

  }

  highlightCell() { // highlightGroup

  }

  createBoard(data) {
    const { tiles, corners } = data;
    const board = [];

    const tilesBetweenCorners = Math.ceil(tiles.length / (corners.length - 1));

    for (let i = 0; i < corners.length; i++) {
      board.push(corners[i]);

      // Add tiles between corners
      if (i < corners.length - 1) {
        const startIdx = i * tilesBetweenCorners;
        const endIdx = (i + 1) * tilesBetweenCorners;
        board.push(...tiles.slice(startIdx, endIdx));
      }
    }

    // Add remaining tiles if any
    const remainingTiles = tiles.slice(corners.length * tilesBetweenCorners);
    board.push(...remainingTiles);

    return board;
  }
}

class GameState extends React.Component {
  // Players
  // PlayerTurn
}





function TileProperty({ tile }: any) {
  return (
    <div>
      Property: {tile.name}
    </div>
  )
}

function TileCorner({ tile }: any) {
  const corners = {
    start: "board-start",
    jail: "board-jail",
    sleep: "board-sleep",
    gotojail: "board-gotojail"
  }
    console.log("wooo", tile.id)

  return (
    <div className={`${corners[tile.id]}`}>
      Corner: {tile.name}
    </div>
  )
}

function Tile({ tile, type }: any) {

  function renderTile() {
    switch (tile.type) {
      case "corner":
        return <TileCorner tile={tile} />
      default:
        return <TileProperty tile={tile} />
    }
  }

  return (
    <>
      {renderTile()}
    </>
  )
}

function Board({ data }: any) {
  const [board, setBoard] = useState([]);


  function newBoard() {
    const createBoard = new BoardModel();
    const tiles = createBoard.createBoard(data);
    setBoard(tiles);
    console.log(tiles)
  }

  useEffect(() => {
    newBoard()
  }, [])

  if (board.length === 0) return <>Loading</>
  return (
    <div>
      <h1 className="text-2xl font-bold flex w-full">Board</h1>
      <div className="board">
        {board.map((item, index) => (
          <Tile tile={item} key={item.name} />
        ))}
      </div>
    </div>
  )
}

function PageRoom() {
  return (
    <div>
      <Board data={dataBoard} />
    </div>
  )
}

export default PageRoom;
