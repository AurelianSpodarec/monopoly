'use client'

import React, { useEffect, useState } from "react";
import dataBoard from "./_components/data";
import GameBoard from "./_components/GameBoard";

function PageRoom() {
  return (
    <div>
      <GameBoard data={dataBoard} />
    </div>
  )
}

export default PageRoom;
