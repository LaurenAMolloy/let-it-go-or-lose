import React from 'react'
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useWord } from '../../Contexts/Word';
import { clsx } from 'clsx';

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Only display the correctly-guessed letters
 * in the word
 */

export default function Keyboard() {
     
    //state to hold the guessed letters
    const [ guessedLetters, setGuessedLetters ] = useState([])
    const { word } = useWord();
    console.log(guessedLetters)

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function handleClick(letter) {
      // //update state with letter clicked
      // //only include letters that are NOT in the state array
      setGuessedLetters(prevLetters => 
        prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
      )
      }
      //Alternative
      // setGuessedLetter(prevLetters => {
      //   const letterSet = new Set(prevLetters)
      //   letterSet.add(letter)
      //   return Array.from(letterSet)
      // })

    const keys = alphabet.toString().split("").map(letter => {
      //variables for guesses
      //Has the letter already been guessed?
      const isGuessed = guessedLetters.includes(letter)
      //Has the letter been guessed and in current word?
      const isCorrect = isGuessed && word.includes(letter)
      const isWrong = isGuessed && !word.includes(letter)
      
      //Create an object with the keys and classes
      const className = clsx({
        correct: isCorrect,
        wrong: isWrong,
      })
      console.log(className)


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
        <button className="newGameBtn">New Game</button>
    </section>

  )
    }
