'use client'

import React from 'react';

import dataBoardTest from "@/data/boards/test";
import TileProperty from "../Tiles/TileProperty";
import TileCorner from "../Tiles/TileCorner";

// Given 40total tiles, there should be 4rows, each row containing 9tiles. Before the row, the tile should be outside and after the row finishesh, the tile should be outside

function Board() {
  console.log(dataBoardTest);


  const boardData = dataBoardTest

  const renderTile = (item, index, className) => {
    console.log("tile", item.corner)

    switch (item.type) {
      case 'corner':
        return <TileCorner key={index} className={className}/>;
      case 'special':
        return <div key={index}>Special</div>;
      default:
        return <TileProperty key={index} tile={item} />;
    }
    
  };
  const renderRows = () => {
    let rows: any = [];
    let currentRow: any = [];
    const classRows = ["top", "right", "bottom", "left"];
    const classCorners = ["start", "prison", "sleep", "gotojail"];
  
    let currentClassIndex = 0;
  
    boardData.forEach((item, index) => {
      if (item.type === "corner") {
        if (currentRow.length > 0) {
          rows.push(
            <div className={`row board-${classRows[currentClassIndex]}`} key={rows.length}>
              {currentRow}
            </div>
          );
          currentRow = [];
          currentClassIndex = (currentClassIndex + 1) % 4; // Cycle through classes
        }
        rows.push(renderTile(item, index, `board-${classCorners[currentClassIndex]}`));

      } else {
        currentRow.push(renderTile(item, index));
      }
    });
  
    if (currentRow.length > 0) {
      rows.push(
        <div className={`row board-${classRows[currentClassIndex]}`} key={rows.length}>
          {currentRow}
        </div>
      );
    }
    return rows;
  };

  
  return (
    <div className="board border border-red-600">
      {renderRows()}
    </div>
  );
}

export default Board;



