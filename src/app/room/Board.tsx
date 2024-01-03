import { useRef, useState } from "react";
import { IPlayer } from "../interfaces/IPlayer";


function Tile({ data }) {
  return (
    <div className="tile min-w-[6.5rem] min-h-[6.5rem] bg-[#482448] " style={{ "minInlineSize": "4.25rem", flex: "1 0 0", blockSize: "6.5rem" }}>
      {data.name}
    </div>
  )
};

function TileCorner({ data, className }: any) {

  return (
    <div className={`flex items-center justify-center flex-col rounded-lg bg-[#232747] ${className}`} style={{ inlineSize: "6.5rem", blockSize: "6.5rem", }}>
      <div className="w-9/12 text-white">
        {/* <IconStartText /> */}
        {data.name}
      </div>
      <div className="flex translate-x-1 w-1/3">
        {/* <IconStart /> */}
      </div>
    </div>
  )
}

function Board({ board, players, children }: { board: any, players: IPlayer, children: React.ReactElement }) {
  const tiles = compileBoard(board);
  const numCorners = 4;
  const boardRef = useRef(null)
  const [boardDimensions, setBoardDimensions] = useState()
  const [boardScale, setBoardScale] = useState(1)

  const dimensions = { width: 0, height: 0 };

  // const rectWidth = document.browser.width
  // const rectHeight = rectWidth / aspectRatio;

  function compileBoard(data: any) {
    const tiles = [...data.properties];
    let corners = [...data.corners];
  
    const compiledData = [];
    const cornerInterval = Math.floor(tiles.length / corners.length);
  
    for (let i = 0; i < tiles.length; i++) {
      if (i % cornerInterval === 0 && corners.length > 0) {
        const corner = { ...corners.shift(), isCorner: true };
        compiledData.push(corner);
      }
      compiledData.push(tiles[i]);
    }
  
    return compiledData;
  }

  const classNamesCorners = ['go', 'jail', 'sleep', 'gotojail'];
  const classnamesRows = ['top', 'right', 'bottom', 'left'];

  function renderBoard() {
    const boardElements = [];
    let row = []

    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];
      const isCorner = tile.isCorner;
      const tilesPerRow = (tiles.length - numCorners) / numCorners

      if (isCorner) {
        boardElements.push(<TileCorner key={i} data={tile} className={`corner board-${classNamesCorners[i / 10]}`} />)
      } else {
        row.push(<Tile key={i} data={tile} />)

        if (row.length % tilesPerRow === 0) {
          boardElements.push(<div key={i} className={`row board-${classnamesRows[i % tilesPerRow]}`}>{...row}</div>)
          row = []
        }
      }

    };

    return boardElements;
  }

  function PlayerToken({ player, position }: any) {
    return (
      <div
        className="absolute top-0 h-8 w-8 leading-8 table "
        style={{
          "fontSize": "2rem",
          "transform": `translate(${player.position.x}px, ${player.position.y}px) translate(-50%, -50%)`,
          "transitionDuration": ".3s",
          "transitionTimingFunction": "cubic-bezier(.1,0,0,1)"
        }}
      >
        {player.token}
      </div>
    )
  }

  function renderPlayers() {
    return (
      <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
        {players.map((player: IPlayer, index: number) => {
          return <PlayerToken key={index} player={player} />
        })}
      </div>
    )
  }

  return (
    <div className="m-auto relative w-fit">
      <div className="board">
        {renderBoard()}
        {renderPlayers()}
        <div className="board-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Board;
