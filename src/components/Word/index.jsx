import { nanoid } from 'nanoid'
import { useWord } from '../../Contexts/Word'

export default function Word({guessedLetters}) {
    const { word } = useWord()
    //Conditionally render letters from word

    const letterElements = word.split("")
    .map(letter => <span className='letterEl' key = {nanoid()}>
            {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
        </span> 
        )
        
  return (
    <div className ="word-container">
        {letterElements}
    </div>
  )
}
