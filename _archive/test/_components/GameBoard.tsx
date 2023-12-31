import { useEffect, useState } from "react";
import BoardModel from "./BoardModel";
import dataBoard from "./data";
import PlayerList from "./PlayerList";
import Widget from "./Widget";
import Dice from "./Dice";

interface Player {
  id: number;
  name: string;
  position: number;
  inJail: boolean;
  money: number;
  properties: number[];
  roundSurvived: number;
  color: string;
  isBankrupt: boolean;
}

// TODO: Have a global state
















// Bank - infinite money, properties, pays player on each go
// GameState - current player turn, dice roll, trade
// Player: own properties, gets paid, pays other players, positoin, money


// When player turn, roll the dice
// Move the player
// Allow player to trade, buy houses etc...
// Player needs to end turn


// Game
// End turn, trade, stats



const CommunityChest = {

}

const Chance = {

}

// TODO:
// - Turn system between, 2, 3+ players
// - Player move forward/backwards by X 
// - Player roll dice and move forward by what the dice rolled; unless dice rolls double, then have a turn again, and if triple, go to jail

// Infinite money
const Bank = {
  
}

// Player: Update Money, Update Color, Update Round Survive, Update inJail, update position

class PlayerModel {
  constructor() {

  }
}

const Player = {
  updateMoney(playerId) {

  },
  updateColor(playedId) {

  },
  updateRoundSurvived(playedId) {

  },
  makeBankrupt(playerId) {

  },
  updateJail(playedId) {

  },
  updatePosition(playedId) {
    
  }

}

function GameBoard({ data }: any) {
  const [board, setBoard] = useState([]);
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 0,
      position: 0,
      inJail: false,
      name: "Mario",
      money: 500,
      properties: [],
      roundSurvived: 0,
      color: "#c33b9c",
      isBankrupt: false,
    },
    {
      id: 1,
      position: 0,
      inJail: false,
      name: "Luigi",
      money: 500,
      properties: [],
      roundSurvived: 0,
      color: "#67e654",
      isBankrupt: false
    }
  ])

  const [playerTurn, setPlayerTurn] = useState(0)
  const boardLength = 12

  const [diceNumber, setDiceNumber] = useState(0)
  const [isDiceRolled, setIsDiceRolled] = useState(false)
  const [jailPlayers, setJailPlayers] = useState([])


  function endTurn() {
    setIsDiceRolled(false)
    if (players.length <= playerTurn + 1) {
      setPlayerTurn(0);
    } else {
      setPlayerTurn((playerTurn) => playerTurn + 1);
    }
  }

  function rollDice() {

    // TODO: player can roll only once time the dice, unless hits double
    // Did player roll? don't allow to roll again

    // was the dice eaven on both? Allow to roll again

    if(isDiceRolled) return
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const totalDice = dice1 + dice2;

    setDiceNumber({
      total: totalDice,
      dice1,
      dice2
    })
    updatePlayerPosition(playerTurn, totalDice)
    setIsDiceRolled(true)
  };

  function updatePlayerPosition(playerId, stepsAmount) {
    const updatedPlayers = [...players];

    if (updatedPlayers[playerId]) {
      const currentPosition = updatedPlayers[playerId].position;
      updatedPlayers[playerId].position = (updatedPlayers[playerId].position + stepsAmount) % boardLength;

      // Player passes or lands on index 0(start) recieves $200
      if (updatedPlayers[playerId].position < currentPosition) {
        updatePlayerMoney(playerId, 200);
      }

      setPlayers(updatedPlayers);
    }
  }

  function updatePlayerMoney(playerId, amount) {
    const updatedPlayers = [...players];

    if (updatedPlayers[playerId]) {
      updatedPlayers[playerId].money += amount;
      setPlayers(updatedPlayers);
    }
  }

  useEffect(() => {
    setBoard(data)
  }, [])

  if (board.length === 0) return <>Loading</>
  return (
    <div className="h-full bg-[#140f1d]">
      <div className="room grid gap-4 h-full">

        <aside className="room-left">
          <div className="text-white font-bold text-5xl">
            Logo.io
          </div>
          <Widget>
            <div className="flex flex-col mb-8 text-white">
              <button onClick={() => rollDice()} className="flex gap-4">
                <Dice number={diceNumber.dice1} />
                <Dice number={diceNumber.dice2} />
              </button>

              {isDiceRolled &&
                <button onClick={() => endTurn()}>End turn</button>
              }
            </div>
          </Widget>
        </aside>

        <div className="room-content">
          <div>

            <div className="board min-w-[700px]">
              {dataBoard.map((tile, index) => {
                return (
                  <div className={`border text-white border-red-500 ${players[0].position === index ? "bg-green-500" : ""} ${players[1].position === index ? "border-2 border-blue-500" : ""} `} key={index}>
                    <div>
                      Index: {index}
                    </div>

                    <div>
                      Name: {tile.name}
                    </div>
                  </div>
                )
              })}

            </div>
          </div>

        </div>

        <aside className="room-right">
          <div className="flex flex-col flex-grow">

            <PlayerList
              players={players}
              playerTurn={playerTurn}
            />

          </div>
        </aside>


      </div>
    </div>
  )
}

export default GameBoard;
