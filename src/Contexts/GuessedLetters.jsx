import { useContext, createContext, useState } from "react";
import { useWord } from "./Word";
import { frozenCharacters } from "../assets/characters";

//Create Context
const GuessedContext = createContext()

//Wrap the theme provider
export const GuessedProvider = ({children}) => {
    const { word } = useWord();

    //initial state for theme
    const [ guessedLetters, setGuessedLetters ] = useState([]);

    //Derived values
    const wrongGuessCount = guessedLetters.filter((letter) => {
        return !word.includes(letter)
    }).length

    //Game Won Logic
    const isGameWon = word.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount === frozenCharacters.length -1;
    const isGameOver = isGameWon || isGameLost

    //Find the last guess and check it
    const lastGuess = guessedLetters[guessedLetters.length -1]
    //Check if last guess exists word includes last guess
    const isLastGuessedWrong = lastGuess && !word.includes(lastGuess)

    return (
        <GuessedContext.Provider value ={{ guessedLetters, setGuessedLetters, wrongGuessCount, isGameLost, isGameOver, isGameWon, lastGuess, isLastGuessedWrong }}>
            {children}
        </GuessedContext.Provider>
    )
}

//Create a custom hook to allow the app to consume the context
export const useGuess = () => useContext(GuessedContext);