import React, { use } from 'react'
import { useState  } from 'react'
import { nanoid } from 'nanoid'

export default function Word() {
    //state for current word
    const [currentWord, setCurrentWord] = useState("react")

    const letterElements = currentWord.split("")
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
