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
      name: 'Medit Avenue 1'
    },
    {
      type: 'chest',
      name: "Chest 2"
    },
    {
      type: 'property',
      group: 'brown',
      name: 'Baltic Avenue 3'
    },
    {
      type: 'pay',
      name: 'Income Tax 4'
    },
    {
      type: 'property',
      name: "San Francisco 5"
    },
    {
      type: "property",
      name: "New York 6 "
    },
    {
      type: 'suprise',
      name: 'Suprise 7'
    },
    {
      type: 'pay',
      name: "Luxury Tax 8"
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

  getRow() {
    return dataBoard.tiles.length / 4
  }

  createCorner() {

  }

  createRow() {

  }

  createTile() {

  }

  highlightCell() { // add highlightGroup afterwards

  }

  compileBoardData(data: any) {
    const { tiles, corners } = data;
    const board = [];

    const tilesBetweenCorners = Math.floor(tiles.length / (corners.length - 1));

    // Add tiles between corners
    for (let i = 0; i < corners.length; i++) {
      board.push(corners[i]);

      if (i < corners.length - 1) {
        const startIdx = i * tilesBetweenCorners;
        const endIdx = Math.min((i + 1) * tilesBetweenCorners, tiles.length);
        board.push(...tiles.slice(startIdx, endIdx));
      }
    }

    const remainingTiles = tiles.slice((corners.length - 1) * tilesBetweenCorners);
    board.push(...remainingTiles);

    console.log("board", board)
    return board;
  }

  renderBoard(data: any) {
    const boardData = this.compileBoardData(data);
    const renderedBoard = [];
    let rowIndex = 0;
    const totalRows = 4;

    const renderRow = (rowTiles: any[], rowClass: string) => (
      <div key={`row-${rowIndex}`} className={`row ${rowClass}`}>
        {rowTiles}
      </div>
    );

    for (let i = 0; i < boardData.length; i++) {
      const currentItem = boardData[i];

      if (currentItem.type === "corner") {
        renderedBoard.push(<Tile tile={currentItem} key={currentItem.name} />);
      } else {

        const tilesInRow = [
          <Tile tile={currentItem} key={currentItem.name} />,
          <Tile tile={boardData[i + 1]} key={boardData[i + 1].name} />,
        ];

        const rowClassMap: any = {
          0: "board-top",
          1: "board-right",
          2: "board-bottom",
          3: "board-left",
        };
        let rowClass = rowClassMap[rowIndex] || "";
        renderedBoard.push(renderRow(tilesInRow, rowClass));

        rowIndex = (rowIndex + 1) % totalRows;
        i++;
      }
    }

    return renderedBoard;
  }

}

function TileProperty({ tile }: any) {
  return (
    <div>
      {tile.name}
    </div>
  )
}

function TileCorner({ tile }: any) {
  const corners:any = {
    start: "board-start",
    jail: "board-jail",
    sleep: "board-sleep",
    gotojail: "board-gotojail"
  }
  console.log("wooo", tile.id)

  return (
    <div className={`${corners[tile.id]}`}>
      {tile.name}
    </div>
  )
}

function Tile({ tile, type }: any) {

  console.log("tile", tile)
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



// Render player on tile 0
// Make the player character move to next tile
// Animate it
function PlayerCharacter() {
  return (
    <div className="h-10 w-10 bg-red-500 rounded-full">
    </div>
  )
}

function Board({ data }: any) {
  const [board, setBoard] = useState([]);

  function newBoard() {
    const renderBoard = new BoardModel();
    const tiles = renderBoard.renderBoard(data);
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
        {board}
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
