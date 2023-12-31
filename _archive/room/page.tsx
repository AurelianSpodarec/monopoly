import Board from "./_components/Board";

function Widget({ children }) {
  return (
    <div className="rounded bg-[#29203f]">
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

function PageRoom() {
  return (
    <div className="h-full bg-[#140f1d]">
      <div className="room grid gap-4 h-full">

        <aside className="room-left">
          <div className="text-white font-bold text-5xl">
            Logo.io
          </div>
          <Widget>
            Share This Game
          </Widget>
        </aside>

        <div className="room-content">
          <Board />
        </div>

        <aside className="room-right">
          <div className="flex flex-col flex-grow">

            <Widget>
              <div>
                <div>
                  Pic
                </div>
                <div>
                  <span>Player Name</span>
                  <div>
                    $1269
                  </div>
                </div>
              </div>
            </Widget>

          </div>
        </aside>


      </div>
    </div>
  )
}

export default PageRoom;
