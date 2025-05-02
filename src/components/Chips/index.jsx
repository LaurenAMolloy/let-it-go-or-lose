import React from 'react'
import { frozenCharacters } from '../../assets/characters'
import { nanoid } from 'nanoid'
import clsx from 'clsx';
import { useGuess } from '../../Contexts/GuessedLetters';
      

export default function Chips() {
    const { wrongGuessCount } = useGuess();
    const chipEl = frozenCharacters.map((character, index) => {
        //boolean is the count bigger than the index?
        const isLostCharacter = index < wrongGuessCount

        const className = clsx("chip", isLostCharacter && "lost")

        return (
            <span  
            className = {className}
            key = {nanoid()}
            >{character.name}</span>
        )
    })

  return (
    <section className ="chips-container">
        <div className="character-chips">
            {chipEl} 
        </div>
    </section>
  )
}
