import { nanoid } from 'nanoid'
import { useWord } from '../../Contexts/Word';
import { useGuess } from '../../Contexts/GuessedLetters';

export default function Word() {
    const { word } = useWord()
    const { guessedLetters } = useGuess(); 
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
