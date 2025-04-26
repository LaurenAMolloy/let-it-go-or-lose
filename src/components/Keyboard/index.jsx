import React from 'react'
import { nanoid } from 'nanoid';
import { useWord } from '../../Contexts/Word';
import { clsx } from 'clsx';
import { getFarewellText } from '../../assets/utils';


export default function Keyboard( {guessedLetters, setGuessedLetters, isGameOver}) {

    //Context
    const { word } = useWord();
    console.log(guessedLetters)

    //Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function handleClick(letter) {
      // //update state with letter clicked
      // //only include letters that are NOT in the state array
      setGuessedLetters(prevLetters => 
        prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
      )
      }
     
    const keys = alphabet.toString().split("").map(letter => {
      //variables for guesses
      const isGuessed = guessedLetters.includes(letter)
      const isCorrect = isGuessed && word.includes(letter)
      const isWrong = isGuessed && !word.includes(letter)
      
      //Create an object with the keys and classes
      const className = clsx({
        correct: isCorrect,
        wrong: isWrong,
      })

      return ( <button 
        className={clsx("keyboardBtn", className)} 
        key={nanoid()}
        value={letter}
        onClick={() => handleClick(letter)}
        >{letter}
        </button>
        )
      })
    

  return (
    <section className="keyboard">
        {keys}
        {isGameOver &&<button className="newGameBtn">New Game</button>}
    </section>

  )
    }
