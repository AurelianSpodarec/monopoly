import { useEffect, useState } from "react";
import BoardModel from "./BoardModel";
import dataBoard from "./data";

function GameBoard({ data }: any) {
  const [board, setBoard] = useState([]);
  const [players, setPlayers] = useState([
    {
      position: 0,
      name: "Mario",
      money: 500,
    },
    // {
    //   id: 2,
    //   position: 0,
    //   name: "Luigi"
    // }
  ])
  const [playerTurn, setPlayerTurn] = useState(0)
  const [totalTurns, setTotalTurns] = useState(0)

  // roll dice [move player index by total amount of dice (1-12)]
  // end turn

  // TODO:
  // - Turn system between, 2, 3+ players
  // - Player move forward/backwards by X 
  // - Player roll dice and move forward by what the dice rolled; unless dice rolls double, then have a turn again, and if triple, go to jail
  function movePlayerByIndex(playerId, tileIndex) {
    setPlayers(prevPlayers => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[playerId] = {
        ...updatedPlayers[playerId],
        position: tileIndex,
      };
      return updatedPlayers;
    });
  }

  // function newBoard() {
  // const renderBoard = new BoardModel();
  // const tiles = renderBoard.renderBoard(data);
  // setBoard(tiles);
  // console.log(tiles)
  // }

  // function movePlayerForward(playerId, steps) {
  //   setPlayers(prevPlayers => {
  //     return prevPlayers.map(player => {
  //       if (player.id === playerId) {
  //         // Ensure the player stays within the board bounds
  //         const newPosition = Math.min(player.position + steps, board.length - 1);
  //         return { ...player, position: newPosition };
  //       }
  //       return player;
  //     });
  //   });
  // }

  // function endTurn() {
  //   setPlayerTurn(prevPlayerTurn => (prevPlayerTurn + 1) % players.length);
  // }

  // function rollDice() {
  //   return Math.floor(Math.random() * 6) + 1;
  // }

  useEffect(() => {
    // newBoard()
    setBoard(data)
  }, [])

  function handleMove() {
    movePlayerByIndex(0, 9)
  }

  function updatePlayerPosition(playerId, amount) {
    const updatedPlayers = [...players];
    const boardLength = 12
    if (updatedPlayers[playerId]) {
      updatedPlayers[playerId].position = (updatedPlayers[playerId].position + amount) % boardLength;
      setPlayers(updatedPlayers);
    }
    // Check if player passed go
  }


  function movePlayerForward(playedId, amountForward) {

    const currentPosition = players[playedId].position

    // Previous index + new index

    // previous index + new dice rolled number
    // TODO: Make sure if it hits the last tile, e.g. 40, it goes to 0
    // User is on tile 35, rolls an 10, that is 45, user should be tile 5
  }

  // Roll dice and add that number to it

  // TODO: Move player behind

  function handleTurn() {
    // const diceResult = rollDice();
    // movePlayerForward(players[playerTurn].id, diceResult);
    // endTurn();
  }


  if (board.length === 0) return <>Loading</>
  return (
    <div>
      <h2>Current Turn: {players[playerTurn].name}</h2>
      <button onClick={() => updatePlayerPosition(0 , 5)}>Move Mario Forward</button>
      <h1 className="text-2xl font-bold flex w-full">Players</h1>
      <div>
        {players.map((player) => {
          return (
            <div key={player.id}>
              Name: {player.name}
              Position: {player.position}
            </div>
          )
        })}
      </div>
      <div className="board">
        {/* {board} */}
        {dataBoard.map((tile, index) => {
          return (
            <div className="border border-red-500" key={index}>
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
  )
}

export default GameBoard;
