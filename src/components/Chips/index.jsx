import React from 'react'
import { frozenCharacters } from '../../assets/characters'

export default function Chips() {
    console.log(frozenCharacters)
    const chipEl = frozenCharacters.map(character => {
    const styles = {
        backgroundColor: character.backgroundColor,
        color: character.color
    }
    return (
        <span style={styles} 
        className = "chip">{character.name}</span>
    )
})

  return (
    <section className ="chips">
        <p className="character-chips">
            {chipEl} 
        </p>
    </section>
  )
}
