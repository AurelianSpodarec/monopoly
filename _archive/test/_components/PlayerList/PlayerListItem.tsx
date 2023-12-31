import PlayerIcon from "../PlayerIcon";

function PlayerListItem({ player, isActive }: any) {
  return (
    <div className={`mb-4 px-4 my-4 ${isActive ? "border-l-2" : "border-l-2 border-transparent"}`}>
      <div className="flex bg-[#130f1d40] items-center p-2">

        <div className="h-8 w-8" style={{ color: player.color }}>
          <PlayerIcon />
        </div>
        <div className="flex justify-between w-full items-center">
          <span className="text-white">{player.name}</span>
          <div className="text-white">
            ${player.money}
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlayerListItem;
