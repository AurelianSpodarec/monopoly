'use client'

import React from 'react';

function BoardRow({ direction, children }: any) {

  const directions:any = {
    top: "board-top",
    right: "board-right",
    bottom: "board-bottom",
    left: "board-left"
  }

  return (
    <div className={`flex ${direction && directions[direction]} `}>
      {children}
    </div>
  )
}



function Board() {
  return (
    <div>

    </div>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#130f1d]">
      <Board />
    </main>
  )
}
