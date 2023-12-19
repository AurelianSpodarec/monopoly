
interface TileProperty {
  tile: any;
  // direction: "reverse";
  direction: "top" | "left" | "right" | "bottom"
}

// Tile: Property, Chest, Suprise, Tax, Transport
function TileProperty({ tile, direction, reverse }: any) {

  console.log("direction", tile)
  
  const directions: any = {
    left: "[writing-mode:vertical-rl] rotate-270",
    right: "[writing-mode:vertical-rl] rotate-180"
  }

  const flagDirection: any = {
    left: "rotate-90",
    right: "rotate-90 "
  }

  return (
    <div className={`
      flex items-center text-white bg-[#262a4c] cursor-pointer justify-between rounded-lg relative flex-col 
      ${reverse === "" ? "flex-col-reverse" : "flex-col"}
      ${direction && directions[direction]}
    `}
      style={{ blockSize: "6.5rem", flex: "1 0 0", minInlineSize: "4.25rem" }}
    >
      
      <div className="absolute overflow-hidden flex items-center justify-center top-0 right-0 bottom-0 left-0 opacity-20 pointer-events-none" style={{ borderRadius: "inherit" }}>
        <div className={`blur-sm inset-0 items-center flex justify-center absolute cheat-svg-icon ${direction && flagDirection[direction]}`}>
          {tile && tile.icon}
        </div>
      </div>

      <div className={`z-10 flex items-center flex-col ${reverse === "" ? "flex-col-reverse" : "flex-col"}`}>
        <div className={`h-8 w-8 rounded-full overflow-hidden ${direction && flagDirection[direction]}`} style={{ marginBlockEnd: "-1rem", marginBlockStart: "-1rem" }}>
          {tile && tile.icon}
        </div>
        <div className="items-center leading-3" style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem", textShadow: "0 0 0.5em #262a4c" }}>
          <p>{tile && tile?.name}</p>
        </div>
      </div>
      <div className="bg-white/20 py-1 text-white px-2 m-1 font-semibold rounded text-xs">
        280$
      </div>

    </div>
  )
}

export default TileProperty;
