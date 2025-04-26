import { useContext, createContext, useState } from "react";

//Create Context
const WordContext = createContext()

//Wrap the theme provider
export const WordProvider = ({children}) => {
    //initial state for theme
    const [ word, setWord ] = useState("react");

    return (
        <WordContext.Provider  value ={{ word, setWord }}>
            {children}
        </WordContext.Provider>
    )
}

//Create a custom hook to allow the app to consume the context
export const useWord = () => useContext(WordContext);