interface Player {
  id: number;
  name: string;
  position: number;
  money: number;
  properties: number[];
  color: string;
}

interface NetWorthPlayer {
  playerId: number;
  turns: [
    {
      turn: number;
      money: number;
    }
  ]
}

interface initialState {
  players: Player[];
  inJail?: number[];
  dice: {
    dice1: number;
    dice2: number;
    total: number;
  },
  statistics: {
    netWorth: NetWorthPlayer[];
    totalTurns: number;
    duration: number;
    mostVisitedProperty: number;
    dice: {
      doubles: number;
      triples: number;
    },
  }
}

const gameState: initialState = {
  players: [],
  inJail: [],
  dice: {
    dice1: 1,
    dice2: 1,
    total: 2,
  },
  statistics: {
    netWorth: [],
    totalTurns: 0,
    duration: 0,
    mostVisitedProperty: 0,
    dice: {
      doubles: 0,
      triples: 0,
    },
  }
}

const store = gameState;

// Players
// =================================================

function setPlayer() {
  gameState.players.push({
    id: 0,
    name: "Mario",
    position: 0,
    money: 500,
    properties: [],
    color: "red",
  })
}

function updatePlayer() {

}

function kickPlayer() {

}

// Handle Payment
function pay(playerId, amount) {
  gameState.players[playerId]
}

// Dice
// ====================================================
function rollDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const totalDice = dice1 + dice2;

  return {
    dice1,
    dice2,
    totalDice
  }
}



export default store;
