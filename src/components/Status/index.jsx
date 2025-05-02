import React from 'react'
import clsx from 'clsx'
import { useGuess } from '../../Contexts/GuessedLetters'
import { getFarewellText } from '../../assets/utils';
import { frozenCharacters } from '../../assets/characters';


export default function Status() {
    const {isGameWon, isGameLost, isGameOver, isLastGuessedWrong, wrongGuessCount} = useGuess(); 

    const className = clsx({
      won: isGameWon,
      lost: isGameLost,
      over: isGameOver,
      farewell: !isGameOver && isLastGuessedWrong
    })
    
    //The character passed has got to match the chip
    function renderGameStatus() {
      if(!isGameOver && isLastGuessedWrong) {
        return <p className='farewell'>{getFarewellText(frozenCharacters[wrongGuessCount -1].name)}</p>
      }
      else if (isGameWon) {
        return (
         <h2>You Win</h2>
        ) 
      } else if (isGameLost) {
        return (
          <h2>You lose</h2>
        )
      } else {
        return null 
      }
    }  

  return (
    <section className = "status">
      <div className = {clsx("statusDiv", className)}>
        {renderGameStatus()}
      </div> 
    </section>
  )
}
