export const Board = (board, updateBoard) => {
  board.map((square, index) => {
    return (
      <Square
        key={index}
        index={index}
        updateBoard={updateBoard}
      >
        { square }
      </Square>
    )
  })
}