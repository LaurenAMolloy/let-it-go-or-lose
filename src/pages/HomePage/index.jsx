import React from 'react'
import { Header, Status, Chips, Word, Keyboard } from '../../components';
import { useGuess } from '../../Contexts/GuessedLetters';
import Confetti from 'react-confetti'


export default function HomePage() {

  const { isGameWon } =useGuess();

  return (
    <>
    { isGameWon && 
       <Confetti
         recycle ={false}
         numberOfPieces ={1000}
      /> 
    }
      <Header />
      <Status />
      <Chips />
      <Word />
      <Keyboard />
    </>
  )
}
