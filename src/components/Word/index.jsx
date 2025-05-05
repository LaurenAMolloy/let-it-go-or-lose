import { nanoid } from 'nanoid'
import { useWord } from '../../Contexts/Word';
import { useGuess } from '../../Contexts/GuessedLetters';
import clsx from 'clsx';

export default function Word() {
    const { word } = useWord()
    const { guessedLetters, isGameLost, numGuessesRemaining, lastGuess } = useGuess(); 

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
    <>
    <section className ="word-container">
        {letterElements}
    </section>

    
     {/* Combined visually-hidden aria-live region for status updates */}
    <section 
    className="sr-only" 
    aria-live="polite"
    role="status"
    >
      <p>
      {word.includes(lastGuess) ? 
      `Correct! The letter ${lastGuess} is in the word` :
      `Sorry, the letter ${lastGuess} is not in the word`}
       You have {numGuessesRemaining} attempts left.
    </p>

     <p>Current Word: {word.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank.").join("")}</p>
    </section>
    </>
  )
}
