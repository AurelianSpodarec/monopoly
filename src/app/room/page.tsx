'use client'

import React, { useEffect, useRef, useState } from 'react';
import BOARD_CLASSIC from './board-classic';


interface Player {
  name: string;
  token: string;
  location: number;
  money: number;
  properties: OwnedProperty[];
}

interface OwnedProperty {
  property: Property;
  houses: number;
}

interface Property {
  name: string;
  group: string;
  cost: number;
  houseCost: number;
  maxHouses: number;
  rent: [number, number, number, number, number, number];
}

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
    <div className="tile min-w-[6.5rem] min-h-[6.5rem] bg-[#482448]">
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


function Board({ board, players, children }: { board: any, players: Player, children: React.ReactElement }) {
  const tiles = compileBoard(board);
  const numCorners = 4;
  const boardRef = useRef(null)
  const [boardDimensions, setBoardDimensions] = useState()
  const [boardScale, setBoardScale] = useState(1)

  // const rectWidth = document.browser.width
  // const rectHeight = rectWidth / aspectRatio;


  useEffect(() => {
    const dim = boardRef?.current?.getBoundingClientRect()
    setBoardDimensions(dim)
    // const ratioX = window.innerWidth / dim.width
    // const ratioY = window.innerHeight / dim.height
    // const scale = Math.min(ratioX, ratioY)

    // // const scale = Math.min(window.innerWidth / img.width, window.innerHeight / img.height);

    // setBoardScale((scale))

    // Board needs to be always square, can't be bigger than screen height or width
    // if(dim) {
    //   calculateScale()
    // }
    
    const ratioX = window.innerWidth / dim.width
    const ratioY = window.innerHeight / dim.height
    const scale = Math.min(ratioX, ratioY)

    setBoardScale((dim.width * scale) / 1000)
  }, [])

  function calculateScale() {
    // if(!boardDimensions) return
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
          "transform": "translate(0px, 0px) translate(-50%, -50%)",
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
        {/* {players.map((player: Player, index: number) => {
          return <PlayerToken key={index} player={player} />
        })} */}
      </div>
    )
  }

  return (
    <div className="board-wrap" ref={boardRef} style={{ width: boardDimensions?.width, height: boardDimensions?.width, transform: `scale(${boardScale})` }}>

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

function Monopoly() {
  const [dice, setDice] = useState({
    die1: 1,
    die2: 1
  })
  const [players, setPlayers] = useState<Player[]>([
    { name: "Mario", token: "🥶", location: 0, money: 1500, properties: [] },
    { name: "Luigi", token: "😎", location: 0, money: 1500, properties: [] }
  ]);
  const [playerTurn, setPlayerTurn] = useState(0);
  const currentPlayer = players[playerTurn];

  function updatePlayer() {

  }


  function getBoardDimensions() {

  }

  function movePlayer() {
    const die1 = rollDie()
    const die2 = rollDie()
    setDice({
      die1,
      die2,
    })
    const spaces = die1 + die2

    // setPlayers(playerTurn, (player) => {
    //   player.location = 5
    // });
  }

  return (
    <div className="bg-[#130f1d] text-white overflow-hidden h-full w-full">
     
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
  return <Monopoly />
}
