'use client'

import React from 'react';

import dataBoardTest from "@/data/boards/test";
import TileProperty from "../Tiles/TileProperty";
import TileCorner from "../Tiles/TileCorner";


// Given 40total tiles, there should be 4rows, each row containing 9tiles. Before the row, the tile should be outside and after the row finishesh, the tile should be outside


function Board() {
  console.log(dataBoardTest);

  const renderTile = (item, index) => {
    switch (item.corner) {
      case 'corner':
        return <TileCorner key={index} />;
      case 'special':
        // return <TileSpecial key={index} />;
        return <div>Special</div>
      default:
        return <TileProperty key={index} tile={item} />;
    }
  };
 
  return (
    <div className="board border border-red-600">
      {dataBoardTest.map((item, index) => renderTile(item, index))}
      {/* {renderTilesWithRows()} */}
    </div>
  );
}

export default Board;

