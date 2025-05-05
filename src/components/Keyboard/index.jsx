import React from 'react'
import { nanoid } from 'nanoid';
import { useWord } from '../../Contexts/Word';
import { useGuess } from '../../Contexts/GuessedLetters';
import { clsx } from 'clsx';
import { randomWord } from "../../assets/utils";
import { useSound } from 'use-sound';
import iceSfx  from '../../assets/iceSfx.mp3'


export default function Keyboard() {

    //Context
    const { word, setWord } = useWord();
    const { guessedLetters, setGuessedLetters, isGameOver } = useGuess();
    //Static values
    const [play] = useSound( iceSfx);
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function handleClick(letter) {
      // //update state with letter clicked
      // //only include letters that are NOT in the state array
      setGuessedLetters(prevLetters => 
        prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
      )
    }
    
    function handleResetGame(){
      setGuessedLetters([]);
      setWord(() =>randomWord());
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
        disabled = {isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={letter}
        onClick={() => {
          handleClick(letter)
          play()
        }} 
        >{letter}
        </button>
        )
      })
    

  return (
    <section className="keyboard">
        {keys}
        {isGameOver &&<button className="newGameBtn" onClick={handleResetGame}>New Game</button>}
    </section>

  )
    }
