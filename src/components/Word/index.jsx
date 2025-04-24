import { useState  } from 'react'
import { nanoid } from 'nanoid'
import { useWord } from '../../Contexts/Word'

export default function Word() {
    const { word } = useWord()

    const letterElements = word.split("")
    .map(letter => <span className='letterEl' key = {nanoid()}>
            {letter.toUpperCase()}
        </span> 
        )
        
  return (
    <div className ="word-container">
        {letterElements}
    </div>
  )
}
