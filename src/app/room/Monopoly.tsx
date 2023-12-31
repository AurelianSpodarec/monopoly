import { useEffect, useRef, useState } from "react";

import Board from "./Board";
import BOARD_CLASSIC from "../../boards/board-classic";
import { IPlayer } from "../../interfaces/IPlayer";


const DATA_PLAYERS = [
  {
    name: "Mario",
    token: "🥶",
    location: 0,
    position: {
      x: 0,
      y: 0
    },
    money: 1500,
    properties: []
  },
  {
    name: "Luigi",
    token: "😎",
    location: 0,
    position: {
      x: 0,
      y: 0
    },
    money: 1500,
    properties: []
  }
]

function Monopoly({ className }: any) {

  const boardRef = useRef(null)
  const [boardDimensions, setBoardDimensions] = useState()
  const [boardScale, setBoardScale] = useState(1)
  const dimensions = { width: 0, height: 0 };

  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  const [players, setPlayers] = useState<IPlayer[]>([...DATA_PLAYERS]);
  const [playerTurn, setPlayerTurn] = useState(0);
  const currentPlayer = players[playerTurn];

  const [dice, setDice] = useState({
    die1: 1,
    die2: 1
  })

  // Die
  // ===========================================================
  function rollDie() {
    // Probability to roll any number is: 1/6(16.667%)
    const randomNumber = Math.random();
    if (randomNumber < 1 / 6) {
      return 1;
    }
    else if (randomNumber < 2 / 6) {
      return 2;
    }
    else if (randomNumber < 3 / 6) {
      return 3;
    }
    else if (randomNumber < 4 / 6) {
      return 4;
    }
    else if (randomNumber < 5 / 6) {
      return 5;
    }
    else {
      return 6;
    }
  }

  // Board Resizing
  // ===========================================================
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
    // const rectWidth = document.browser.width
    // const rectHeight = rectWidth / aspectRatio;

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

  function getBoardDimensions() {

  }

  // Player
  // ===========================================================

  function updatePlayer(playedIndex, position) {

  }

  function addPlayerToLobby(player:any) {

  }

  function updatePlayerPosition(playerIndex:number) {
    const boardDimensionsRect = boardRef?.current?.getBoundingClientRect();

    console.log("wwwwwwwwwwwwwwwwwwww", boardDimensionsRect.height)
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight; // -32, padding

    console.log(boardRef.current.getBoundingClientRect())
  
    // console.log(scaleX)
    // setPlayers(oldPlayers => {
    //   const updatedPlayers = [...oldPlayers];
    //   updatedPlayers[playerIndex] = {
    //     ...oldPlayers[playerIndex],
    //     position: {
    //       x: 510 / 10,
    //       y: 510 / 10 // Corrected the variable name here
    //     }
    //   };
    //   return updatedPlayers;
    // });
  }

  function movePlayer(playedIndex) {
    const die1 = rollDie()
    const die2 = rollDie()
    setDice({
      die1,
      die2,
    })
    const spaces = die1 + die2
    updatePlayerPosition(playerIndex)
  }

  // Other
  // ===========================================================

  useEffect(() => {
    updateBoardScale()
    // setPlayerTransformPosition(1)
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

  return (
    <div
      className={`bg-[#130f1d] text-white ${className} `}
      ref={boardRef}
      style={{
        transform: `scale(${boardScale})`,
        width: boardDimensions?.width,
        height: boardDimensions?.height,
      }}
    >

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

export default Monopoly;
