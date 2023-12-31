import Widget from "../Widget"
import PlayerListItem from "./PlayerListItem"

function PlayerList({ players, playerTurn }) {
  return (
    <Widget>
      {players.map((player, index) => {
        const isActive = playerTurn === index
        return (
          <div key={index}>
            <PlayerListItem player={player} isActive={isActive} />
          </div>
        )
      })}
    </Widget>
  )
}

export default PlayerList;
