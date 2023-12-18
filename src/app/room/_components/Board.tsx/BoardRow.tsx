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

export default BoardRow;
