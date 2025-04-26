import React from 'react'
import clsx from 'clsx'

/**
 * Backlog:
 * --Farewell messages in status
 * --Fix a11y issues
 * --Make the new game button work
 * --Choose a random word from a list
 * --Snow drop when the user loses
 * --Confetti when the user wins 
 */
 

export default function Status( {isGameWon, isGameLost, isGameOver, isLastGuessedWrong }) {

    const className = clsx({
    won: isGameWon,
    lost: isGameLost,
    over: isGameOver,
    farewell: !isGameOver && isLastGuessedWrong
    })

    function renderGameStatus() {
      if(!isGameOver && isLastGuessedWrong) {
        return <p className='farewell'>Bye</p>
      }
      if (isGameWon) {
        return (
         <h2>You Win</h2>
        ) 
      } if(isGameLost) {
        return (
          <h2>You lose</h2>
        )
      } 
      return null 
    }  

  return (
    <section className = "status">
      <div className = {clsx("statusDiv", className)}>
        {renderGameStatus()}
      </div> 
    </section>
  )
}
