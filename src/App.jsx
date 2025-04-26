import './App.css'
import { Header } from './components'
import { Status } from './components'
import { Chips } from './components'
import { Word } from './components'
import { Keyboard } from './components'
import { useWord } from './Contexts/Word'
import { useEffect, useState } from 'react'
import { frozenCharacters } from './assets/characters';
import { getFarewellText } from './assets/utils'

function App() {
  //state to hold the guessed letters
  const [ guessedLetters, setGuessedLetters ] = useState([])
  //State to hold the farewell messages
  //const [ farewell, setFarewell] = useState([])

  const { word } = useWord();
  console.log(word)

  //Derived values
  //We want to filter out the wrong guesses
    const wrongGuessCount = guessedLetters.filter((letter) => {
      return !word.includes(letter)
    }).length
    console.log(wrongGuessCount)

    
    //Game Won Logic
    const isGameWon = word.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount === frozenCharacters.length -1;
    const isGameOver = isGameWon || isGameLost

    //Find the last guess and check it
    const lastGuess = guessedLetters[guessedLetters.length -1]
    //Check if last guess exists word includes last guess
    const isLastGuessedWrong = lastGuess && !word.includes(lastGuess)
    console.log(isLastGuessedWrong)


  return (
    <> 
    <Header />
    <Status isGameWon={isGameWon} isGameLost={isGameLost} isGameOver={isGameOver} isLastGuessedWrong={isLastGuessedWrong} />
    <Chips guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} wrongGuessCount={wrongGuessCount}  />
    <Word guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters}   />
    <Keyboard guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} wrongGuessCount={wrongGuessCount} isGameOver={isGameOver}  />
    </>
  )
}

export default App
