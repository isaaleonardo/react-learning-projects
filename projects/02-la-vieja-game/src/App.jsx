import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './utils.js'

import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {
  const [board, setBoard] = useState(() => {
    const localStorageBoard = window.localStorage.getItem('board')

    return localStorageBoard
      ? JSON.parse(localStorageBoard)
      : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const localStorageTurn = window.localStorage.getItem('turn')
    return localStorageTurn ?? TURNS.X
  })

  const [winner, setWinner] = useState(() => {
    const localStorageWinner = window.localStorage.getItem('winner')
    return localStorageWinner ?? null // null: no winner; false: draw
  })

  const updateBoard = (index) => {
    // if position is already filled, don't update
    if (board[index]) return

    // if there's a winner, don't update
    if (winner) return

    const newBoard = [...board]
    newBoard[index] = turn

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    window.localStorage.setItem('turn', newTurn)
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()

      window.localStorage.setItem('winner', newWinner)
      setWinner(newWinner)
    }

    if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    window.localStorage.removeItem('board')
    setBoard(Array(9).fill(null))

    window.localStorage.removeItem('turn')
    setTurn(TURNS.X)

    window.localStorage.removeItem('winner')
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>La Vieja</h1>

      <section className="game">
        {
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
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <WinnerModal
            winner={winner}
            resetGame={resetGame}
          />
        )
      }

      <button onClick={resetGame}>Resetear juego</button>
    </main>
  )
}

export default App
