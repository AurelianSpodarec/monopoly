'use client'

import React from 'react';

// import dataBoardTest from "@/data/boards/test";
import TileProperty from "../Tiles/TileProperty";
import TileCorner from "../Tiles/TileCorner";
import TileSpecial from '../Tiles/TileSpecial';
import dataProperties from '@/data/properties';

// Given 40total tiles, there should be 4rows, each row containing 9tiles. Before the row, the tile should be outside and after the row finishesh, the tile should be outside


const corners = [
  {
    name: "Start"
  },
  {
    name: "Jail",
  },
  {
    name: "Vaccation",
  },
  {
    name: "Go to jail"
  }
]

// TODO: Always hardcode the start corner


let dataBoardTest: any = [
  {
    ...dataProperties.brazil,
    ...dataProperties.brazil.cities.salvador,
  },
  {
    ...dataProperties.brazil,
    ...dataProperties.brazil.cities.rio,
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.cities.telAviv,
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.cities.haifa,
  },
  {
    ...dataProperties.israel,
    ...dataProperties.israel.cities.jerusalem,
  },
  {
    type: "special",
    name: "Chest"
  },
  {
    ...dataProperties.italy,
    ...dataProperties.italy.cities.milan,
  },
  {
    ...dataProperties.italy,
    ...dataProperties.italy.cities.rome,
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.cities.frankfurt,
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.cities.munich,
  },
  {
    ...dataProperties.germany,
    ...dataProperties.germany.cities.berlin,
  },
  {
    ...dataProperties.usa,
    ...dataProperties.usa.cities.sanFrancisco,
  },
]

function insertAtIndexAndShift(index, element) {
  dataBoardTest.splice(index, 0, element);
}

// This should be automatically added behind the scenes, the user should be able to change the graphic/image
insertAtIndexAndShift(0, {
  name: "Start",
  type: "corner"
});

insertAtIndexAndShift(4, {
  name: "Prison",
  type: "corner",
});

insertAtIndexAndShift(8, {
  name: "Vaccation",
  type: "corner",
});

insertAtIndexAndShift(12, {
  name: "Go To Prison",
  type: "corner",
});



const boardDataNew = {
  corners: [

  ],
  tiles: [
    
  ]
}

const boardConfig = {
  
}



class NewBoard {
  private boardData;
  private boardCorners;
  private rowSize;

  constructor(boardData:any, boardCorners:any = 4, rowSize:any) {
    this.boardData = boardData;
    this.boardCorners = boardCorners;
    this.rowSize = rowSize;
    this.renderBoard()
  }

  // Board
  // ============================

  private calculateRowSize() {
    return this.boardData / this.boardCorners;
  }

  private addCorner(index: number, jsonToAdd: any) {
    // Automatically add corner on index, 0, 9, 19, 29
    // 
    this.boardData.splice(index, 0, jsonToAdd);
  }

  
  private addRow() {
    
  }
  
  private renderTile({ item, index, className, direction }) {
    // Is tile a corner? 
    // Different tiles: Property, Special, Corner

    switch (item.type) {
      case 'corner':
        return <TileCorner key={index} className={className} />;
      case 'special':
        return <TileSpecial key={index} />;
      default:
        return <TileProperty key={index} tile={item} direction={direction} />;
    }
  }

  // Player
  // ============================
  private onPass() {

  }

  private onStopAt() {

  }

  private moveTo() {

  }

  // Renders
  // ============================
  private renderBoard() {
    return (
      <div className="board">
        {/* renderBoard */}
      </div>
    )
  }
}





function Board() {
  console.log("mmm", dataBoardTest.length / 4);

  const boardData = dataBoardTest

  const renderTile = (item, index, className, direction) => {
    switch (item.type) {
      case 'corner':
        return <TileCorner key={index} className={className} />;
      case 'special':
        return <TileSpecial key={index} />;
      default:
        return <TileProperty key={index} tile={item} direction={direction} />;
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
          currentClassIndex = (currentClassIndex + 1) % 4;
        }
        rows.push(renderTile(item, index, `board-${classCorners[currentClassIndex]}`, classRows[currentClassIndex]));

      } else {
        currentRow.push(renderTile(item, index, null, classRows[currentClassIndex]));
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



