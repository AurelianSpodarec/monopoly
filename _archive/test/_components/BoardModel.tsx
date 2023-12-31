import React from 'react';
import dataBoard from "./data";
import Tile from '../../../src/app/Tile';

class BoardModel extends React.Component {
  getRow() {
    return dataBoard.tiles.length / 4;
  }

  createCorner() {
  }

  createRow() {
  }

  createTile() {
  }

  highlightTile() {

  }

  highlightTileGroup() {

  }

  addTilesBetweenCorners(board, startIndex, endIndex, tiles) {
    board.push(...tiles.slice(startIndex, endIndex));
  }

  processCornersAndTiles(board, corners, tiles, tilesBetweenCorners) {
    for (let i = 0; i < corners.length; i++) {
      board.push(corners[i]);

      if (i < corners.length - 1) {
        const startIdx = i * tilesBetweenCorners;
        const endIdx = Math.min((i + 1) * tilesBetweenCorners, tiles.length);
        this.addTilesBetweenCorners(board, startIdx, endIdx, tiles);
      }
    }
  }

  addRemainingTiles(board, corners, tiles, tilesBetweenCorners) {
    const remainingTiles = tiles.slice((corners.length - 1) * tilesBetweenCorners);
    board.push(...remainingTiles);
  }

  compileBoardData(data) {
    const { tiles, corners } = data;
    const board = [];

    const tilesBetweenCorners = Math.floor(tiles.length / (corners.length - 1));

    this.processCornersAndTiles(board, corners, tiles, tilesBetweenCorners);
    this.addRemainingTiles(board, corners, tiles, tilesBetweenCorners);

    console.log('board', board);
    return board;
  }

  renderBoard(data:any) {
    const boardData = this.compileBoardData(data);
    const renderedBoard = [];
    let rowIndex = 0;
    const totalRows = 4;

    const renderRow = (rowTiles, rowClass) => (
      <div key={`row-${rowIndex}`} className={`row ${rowClass}`}>
        {rowTiles}
      </div>
    );

    for (let i = 0; i < boardData.length; i++) {
      const currentItem = boardData[i];

      if (currentItem.type === 'corner') {
        renderedBoard.push(<Tile tile={currentItem} key={currentItem.name} />);
      } else {
        const tilesInRow = [
          <Tile tile={currentItem} key={currentItem.name} />,
          <Tile tile={boardData[i + 1]} key={boardData[i + 1].name} />,
        ];

        const rowClassMap = {
          0: 'board-top',
          1: 'board-right',
          2: 'board-bottom',
          3: 'board-left',
        };
        let rowClass = rowClassMap[rowIndex] || '';
        renderedBoard.push(renderRow(tilesInRow, rowClass));

        rowIndex = (rowIndex + 1) % totalRows;
        i++;
      }
    }

    return renderedBoard;
  }
}

export default BoardModel;
