import React from 'react'
import { frozenCharacters } from '../../assets/characters'
import { nanoid } from 'nanoid'

export default function Chips() {
    console.log(frozenCharacters)
    const chipEl = frozenCharacters.map(character => {
    const styles = {
        backgroundColor: character.backgroundColor,
        color: character.color
    }
    return (
        <span style={styles} 
        className = "chip"
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
