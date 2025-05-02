import { nanoid } from 'nanoid'
import { useWord } from '../../Contexts/Word';
import { useGuess } from '../../Contexts/GuessedLetters';
import clsx from 'clsx';

export default function Word() {
    const { word } = useWord()
    const { guessedLetters, isGameLost } = useGuess(); 

    // Ensure word is not empty or undefined
    if (!word) {
      return <div className="word-container">No word to display</div>;
    }
    
    
    //Conditionally render letters from word
    const letterElements = word.split("")
    .map(letter => {
      //if game is lost show letters and style red
      const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)

      const letterClassName = clsx(
        isGameLost && !guessedLetters.includes(letter) && "missed-letter"
      )

     return (
     <span className={`letterEl ${letterClassName}`} key = {nanoid()}>
            {shouldRevealLetter ? letter.toUpperCase() : ""}
        </span> 
        )
        
      })
        
  return (
    <div className ="word-container">
        {letterElements}
    </div>
  )
}
