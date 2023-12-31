'use client'

import React, { useEffect, useState } from 'react';
import BOARD_CLASSIC from './board-classic';
// import Tile from '../Tile';

const BOARD = {
  properties: BOARD_CLASSIC.properties,
  corners: BOARD_CLASSIC.corners
}

function compileBoard(data: any) {
  const tiles = [...data.properties];
  let corners = [...data.corners];

  const compiledData = [];
  const cornerInterval = Math.floor(tiles.length / corners.length);

  // for (let i = 0; i < tiles.length; i++) {
  //   if (i % cornerInterval === 0 && corners.length > 0) {
  //     compiledData.push(corners.shift());
  //   }
  //   compiledData.push(tiles[i]);
  // }

  for (let i = 0; i < tiles.length; i++) {
    if (i % cornerInterval === 0 && corners.length > 0) {
      const corner = { ...corners.shift(), isCorner: true };
      compiledData.push(corner);
    }
    compiledData.push(tiles[i]);
  }

  return compiledData;
}

function TileCorner({ className }: any) {
  return (
    <div>
      Corner
    </div>
  )
}

function TileProperty({ tile }: any) {
  return (
    <div>
      Property
    </div>
  )
}




const Tile = ({ data }) => (
  <div className="tile min-w-[6.5rem] min-h-[6.5rem]">
    {data.name}
  </div>
);

const Corner = ({ data, className }: any) => (
  <div className={`corner board-${className}`}>
    {data.name}
  </div>
);

const Row = ({ tiles, className }) => (
  <div className={`row board-${className}`}>
    {tiles.map((tile, index) => (
      <Tile key={index} data={tile} className={className} />
    ))}
  </div>
);
const Board = () => {
  const tiles = compileBoard(BOARD);
  const numCorners = 4;

  const cornerLabels = ['go', 'jail', 'sleep', 'gotojail'];
  const rowLabels = ['top', 'right', 'bottom', 'left'];

  const renderBoard = () => {
    const boardElements = [];

    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];
      const isCorner = tile.type === 'corner';


      return boardElements;
    };
  }

  return <div className="board">{renderBoard()}</div>;
};





// function Board() {
//   const tiles = compileBoard(BOARD);
//   const boardLength = tiles.length;
//   const numberOfRows = Math.ceil(boardLength / 10);
//   const numberOfProperties = boardLength - 4;

//   function renderBoard() {
//     const rows = [];
//     for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
//       const rowTiles = tiles.slice(rowIndex * 10, (rowIndex + 1) * 10);
//       const rowElements = rowTiles.map((tile, tileIndex) => (
//         <div key={tileIndex} className="tile">
//           Hi{tileIndex + rowIndex * 10}
//         </div>
//       ));
//       rows.push(
//         <div key={rowIndex} className="row">
//           {rowElements}
//         </div>
//       );
//     }
//     return rows;
//   }

//   // Add tiles with indices 0, 10, 20, 30, etc., outside the rows
//   const outsideRowTiles = tiles.filter((_, index) => index % 10 === 0 && index !== 0);
//   const outsideRowElements = outsideRowTiles.map((tile, tileIndex) => (
//     <div key={tileIndex} className="tile outside-row">
//       Hi{tileIndex * 10}
//     </div>
//   ));

//   return (
//     <div className="board">
//       {outsideRowElements}
//       {renderBoard()}
//     </div>
//   );
// }



//   function renderBoard() {
//     const rows = [];
//     for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
//       rows.push(
//         <React.Fragment key={rowIndex}>
//           {rowIndex % 2 === 0 && <div>{tiles[rowIndex].name}</div>}
//           <div>
//             {renderRowTiles(rowIndex)}
//           </div>
//           {rowIndex % 2 === 1 && <div>{tiles[rowIndex].name}</div>}
//         </React.Fragment>
//       );
//     }
//     return rows;
//   };



//   const renderRowTiles = (rowIndex: number) => {
//     const tiles = [];

//     for (let tileIndex = rowIndex * 10; tileIndex < (rowIndex + 1) * 10; tileIndex++) {
//       tiles.push(<div key={tileIndex}>{tiles[rowIndex]}</div>);
//     }
//     return tiles;
//   }

//   return (
//     <div className="board">
//       {renderBoard()}
//     </div>
//   )
// }

// Is object has corner: true, it should be outside row and placed
// const rows = Array.from({ length: numberOfRows }, (_, rowIndex) => {

//   const startIndex = rowIndex * 10;
//   const endIndex = Math.min(startIndex + 10, boardLength);

//   const rowTiles = tiles.slice(startIndex, endIndex);

//   const renderTile = rowTiles.map((tile, index) => (
//     <div key={startIndex + index}>
//       {tile.name} {startIndex + index}
//     </div>
//   ));

//   let rowClass = '';
//   switch (rowIndex) {
//     case 0:
//       rowClass = 'board-top';
//       break;
//     case 1:
//       rowClass = 'board-right';
//       break;
//     case 2:
//       rowClass = 'board-bottom';
//       break;
//     case 3:
//       rowClass = 'board-left';
//       break;
//     default:
//       break;
//   }

//   return (
//     <div key={rowIndex} className={`board-row ${rowClass}`}>
//       {renderTile}
//     </div>
//   );

// });

// Determine corner classes dynamically
// const specialIndices = [0, Math.floor(boardLength / 4), Math.floor(boardLength / 2), Math.floor((3 * boardLength) / 4)];
// const specialItems = specialIndices.map((index) => {
//   let specialClass = '';

//   // Assign classes based on corner position
//   switch (index) {
//     case 0:
//       specialClass = 'board-start';
//       break;
//     case Math.floor(boardLength / 4):
//       specialClass = 'board-jail';
//       break;
//     case Math.floor(boardLength / 2):
//       specialClass = 'board-sleep';
//       break;
//     case Math.floor((3 * boardLength) / 4):
//       specialClass = 'board-gotojail';
//       break;
//     default:
//       break;
//   }

//   return (
//     <div key={index} className={`board-corner ${specialClass}`}>
//       {tiles[index].name} {index}
//     </div>
//   );
// });





function Monopoly() {
  return (
    <div>
      <Board />
    </div>
  )
}

export default function Room() {
  return <Monopoly />
}
