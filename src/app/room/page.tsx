'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import BOARD_CLASSIC from './board-classic';
import { IPlayer } from '../interfaces/IPlayer';


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

function rollDie() {
  return 1 + Math.floor(Math.random() * 6);
}


function Monopoly({ className }: any) {
  const [dice, setDice] = useState({
    die1: 1,
    die2: 1
  })
  const [players, setPlayers] = useState<IPlayer[]>([
    { name: "Mario", token: "🥶", location: 0, position: { x: 0, y: 0}, money: 1500, properties: [] },
    { name: "Luigi", token: "😎", location: 0, position: { x: 0, y: 0 }, money: 1500, properties: [] }
  ]);
  const boardRef = useRef(null)
  const [playerTurn, setPlayerTurn] = useState(0);
  const currentPlayer = players[playerTurn];


  const [boardDimensions, setBoardDimensions] = useState()
  const [boardScale, setBoardScale] = useState(1)

  const dimensions = { width: 0, height: 0 };
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

 
  const updateBoardScale = () => {

    const boardDimensionsRect = boardRef?.current?.getBoundingClientRect();
    console.log("board dimension rect", boardDimensionsRect)
    if (!boardDimensionsRect) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight; // -32, padding

    const scaleX = windowWidth / boardDimensionsRect.width;
    const scaleY = windowHeight / boardDimensionsRect.height;

    const scale = Math.min(scaleX, scaleY);

    if (windowWidth <= windowHeight) {
      // setBoardScale((dimensions.height * scale) / 1000);
      const newWidth = dimensions.height;
      // setBoardScale((dimensions.width * scale) / 1000);
      setWindowDimensions({
        width: windowHeight,
        height: windowHeight
      })
      setBoardScale(scale);
    } else {
      setBoardScale((windowHeight + 64) / 1000);
      setBoardDimensions({
        width: windowHeight,
        height: windowHeight,
      });
    }

      // const dimensions = boardRef?.current?.getBoundingClientRect()
    // setBoardDimensions(dimensions)




    // const ratioX = window.innerWidth / dimensions.width
    // const ratioY = window.innerHeight / dimensions.height
    // const scale = Math.min(ratioX, ratioY)

    // // const scale = Math.min(window.innerWidth / img.width, window.innerHeight / img.height);

    // setBoardScale((scale))

    // Board needs to be always square, can't be bigger than screen height or width
    // if(dimensions) {
    //   calculateScale()
    // }

    // const ratioX = window.innerWidth / dimensions.width
    // const ratioY = window.innerHeight / dimensions.height
    // const scale = Math.min(ratioX, ratioY)

    // setBoardScale((dimensions.width * scale) / 1000)
  };

  useEffect(() => {
    updateBoardScale()
  }, [])

  useEffect(() => {
    const handlerResize = () => {
      updateBoardScale()
    };
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

  function updatePlayer() {

  }

  function setPlayerTransformPosition(playerIndex) {
    const boardDimensionsRect = boardRef?.current?.getBoundingClientRect(); 

    console.log("wwwwwwwwwwwwwwwwwwww", boardDimensionsRect.height)
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight; // -32, padding

    console.log(boardRef.current.getBoundingClientRect())
    // console.log(scaleX)
    setPlayers(oldPlayers => {
      const updatedPlayers = [...oldPlayers];
      updatedPlayers[playerIndex] = {
        ...oldPlayers[playerIndex],
        position: {
          x: 510 / 10,
          y: 510 / 10 // Corrected the variable name here
        }
      };
      return updatedPlayers;
    });
  }

  function getBoardDimensions() {

  }

  useEffect(() => {
    setPlayerTransformPosition(1)
  }, [])

  function movePlayer() {
    const die1 = rollDie()
    const die2 = rollDie()
    setDice({
      die1,
      die2,
    })
    const spaces = die1 + die2
  }

  return (
    <div
      className={`bg-[#130f1d] text-white ${className} `}
      ref={boardRef}
      style={{
        width: boardDimensions?.width,
        height: boardDimensions?.height,
        transform: `scale(${boardScale})`
      }}>

      <Board board={BOARD_CLASSIC} players={players}>
        <div className="h-full w-full p-10 bg-[#130f1d] text-white">

          <h3 className="text-2xl mb-2">Player Turn: {currentPlayer.name} {currentPlayer.token}</h3>
          <h3 className="text-2xl mb-2">Dice Roll: {dice.die1} & {dice.die2}</h3>

          <div className="mb-2 flex gap-4">
            <button onClick={() => movePlayer()} className="px-2 py-0 bg-[#39ad39] disabled:opacity-50 disabled:cursor-not-allowed">
              Roll Dice
            </button>
            <button className="px-2 py-0 bg-[#39ad39] disabled:opacity-50 disabled:cursor-not-allowed">
              End Turn
            </button>
          </div>

          <div>
            {players.map((player, index) => {
              return (
                <div key={index} className="mb-4">
                  <div>{player.name}{player.token}{player.money}</div>
                  Position: {player.location}
                </div>
              )
            })}
          </div>

        </div>
      </Board>
    </div>
  )
}

export default function Room() {
  return (
    <div className="app">
      <div className="v-room">

        <div className="v-content">

          <div className="v-content-left h-[1800px] ">
            <div className="border-4 border-red-400 bg-yellow-900 h-full">
              Content
            </div>
          </div>

          <Monopoly className="v-content-center" />


          <div className="v-content-right w-full h-[1800px]">
            <div className="border-4 bg-violet-900 border-violet-400 w-full">
              Content
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
