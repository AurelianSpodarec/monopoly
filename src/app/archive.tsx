

// function Board() {
//   const dataBoard = []; // Replace this with your actual dataBoard array

//   const renderBoardRows = () => {
//     const rows = [];
//     for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
//       rows.push(
//         <BoardRow key={rowIndex} direction={getRowDirection(rowIndex)}>
//           {renderRowTiles(rowIndex)}
//         </BoardRow>
//       );
//     }
//     return rows;
//   };

//   const renderRowTiles = (rowIndex: number) => {
//     const tiles = [];
//     for (let tileIndex = rowIndex * 10; tileIndex < (rowIndex + 1) * 10; tileIndex++) {
//       tiles.push(
//         <React.Fragment key={tileIndex}>
//           {tileIndex % 10 === 0 && <TileCorner className={getCornerClassName(tileIndex)} />}
//           <TileProperty tile={dataProperties[tileIndex]} />
//         </React.Fragment>
//       );
//     }
//     return tiles;
//   };

//   const getRowDirection = (rowIndex: number): string => {
//     return rowIndex % 2 === 0 ? "top" : "bottom";
//   };

//   const getCornerClassName = (index: number): string => {
//     const cornerNumber = Math.floor(index / 10) % 4;
//     switch (cornerNumber) {
//       case 0:
//         return "top-left";
//       case 1:
//         return "top-right";
//       case 2:
//         return "bottom-right";
//       case 3:
//         return "bottom-left";
//       default:
//         return "";
//     }
//   };

//   return <div className="board">{renderBoardRows()}</div>;
// }


// function Board() {
  // return (
  //   <div className="board">

  //     <TileCorner className="board-start" />
  //     <BoardRow direction="top">
  //       {dataBoard.map((tile: any, index: number) => {
  //         return (
  //           <TileProperty
  //             tile={tile}
  //           />
  //         )
  //       })}
  //     </BoardRow>

  //   </div>
  // )
//   return (
//     <div className="board">
//       {dataBoard.map((tile: any, index: number) => {
//         return (
//           <React.Fragment key={index}>
//             {index % 10 === 0 && <TileCorner className={getCornerClassName(index)} />}
//             <TileProperty tile={tile} />
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );

// }

// function Board() {
//   return (
//     <div>

//       <div className='flex'>
//         <Tile
//           tile={{
//             name: "Paris",
//             icon: <FlagFrance />
//           }}
//         />
//         <Tile
//           reverse
//           tile={{
//             name: "Paris",
//             icon: <FlagFrance />
//           }}
//         />
//       </div>
//       <div className="flex flex-col">
//         <Tile
//           direction="left"
//           tile={{
//             name: "Paris",
//             icon: <FlagFrance />
//           }}
//         />
//         <Tile
//           direction="left"
//           tile={{
//             name: "Paris",
//             icon: <FlagFrance />
//           }}
//         />
//       </div>
//       <div className="flex flex-col">
//         <Tile
//           reverse
//           direction="right"
//           tile={{
//             name: "Paris",
//             icon: <FlagFrance />
//           }}
//         />
//         <Tile
//           reverse
//           direction="right"
//           tile={{
//             name: "Paris",
//             icon: <FlagFrance />
//           }}
//         />
//       </div>
//     </div>
//   )
// }


// function Board() {
//   console.log("hi", dataBoard);

//   // Function to determine the class based on the index
//   const getRowClass = (index: number) => {
//     const rowNumber = Math.floor(index / 10) + 1;

//     switch (rowNumber) {
//       case 1:
//         return 'top';
//       case 2:
//         return 'right';
//       case 3:
//         return 'bottom';
//       default:
//         return 'left';
//     }
//   };

//   const getTileClass = (index: number) => {
//     if ((index + 1) % 10 === 1) {
//       const cornerIndex = Math.floor(index / 10);
//       switch (cornerIndex) {
//         case 0:
//           return 'start';
//         case 1:
//           return 'prison';
//         case 2:
//           return 'vacation';
//         case 3:
//           return 'gotoprison';
//         default:
//           return '';
//       }
//     }
//     return '';
//   };

//   return (
//     <div className="grid justify-evenly max-w-3lg board">
//       {dataBoard.map((tile: any, index: number) => {
//         const tileClass = getTileClass(index);

//         // If index is a multiple of 10, add a div with specific class
//         if (index % 10 === 0) {
//           const rowClass = getRowClass(index);
//           const tilesInRow = dataBoard.slice(index, index + 10);

//           return (
//             <div key={index} className={`row board-${rowClass} ${tileClass}`}>
//               {tilesInRow.map((tileInRow: any, tileIndex: number) => 
//                 <Tile 
//                   key={tileIndex} 
//                   tile={tileInRow} 
//                   className={tileClass} 
//                 />
//               )}
//             </div>
//           );
//         }

//         return null; // Skip rendering for other indexes
//       })}
//     </div>
//   );
// }


// function Board() {
//   // const dataBoard = []; // Replace this with your actual dataBoard array

//   const renderBoardRows = () => {
//     const rows = [];
//     for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
//       rows.push(
//         <React.Fragment key={rowIndex}>
//           {rowIndex % 2 === 0 && <TileCorner className={getCornerClassName(rowIndex)} />}
//           <BoardRow direction={getRowDirection(rowIndex)}>
//             {renderRowTiles(rowIndex)}
//           </BoardRow>
//           {rowIndex % 2 === 1 && <TileCorner className={getCornerClassName(rowIndex + 1)} />}
//         </React.Fragment>
//       );
//     }
//     return rows;
//   };

//   const renderRowTiles = (rowIndex: number) => {
//     const tiles = [];
//     for (let tileIndex = rowIndex * 10; tileIndex < (rowIndex + 1) * 10; tileIndex++) {
//       tiles.push(<TileProperty key={tileIndex} tile={dataBoard[tileIndex]} />);
//     }
//     return tiles;
//   };

//   const getRowDirection = (rowIndex: number): string => {
//     return rowIndex % 2 === 0 ? "top" : "bottom";
//   };

//   const getCornerClassName = (index: number): string => {
//     const cornerNumber = Math.floor(index / 10) % 4;
//     switch (cornerNumber) {
//       case 0:
//         return "board-start"; // 1st corner
//       case 1:
//         return "board-prison"; // 2nd corner
//       case 2:
//         return "board-vacation"; // 3rd corner
//       case 3:
//         return "board-gotoprison"; // 4th corner
//       default:
//         return "";
//     }
//   };

//   return <div className="board">{renderBoardRows()}</div>;
// }