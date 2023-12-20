'use client'

import dataBoardClassic from "@/gameData/board";
import database from "@/utility/database";
import { useEffect, useState } from "react";


function PageRoom() {
  const [board, setBoard] = useState([])

  useEffect(() => {
    if(dataBoardClassic)
    setBoard(database.compileBoard(dataBoardClassic))
  }, [dataBoardClassic])

  console.log("board", board)
  if(!board) return <div>No Boaard data</div>
  return (
    <div>
      {board.map((item => {
        return (
          <div>
              {item?.name}
          </div>
        )
      }))}
    </div>
  )
}

export default PageRoom;
