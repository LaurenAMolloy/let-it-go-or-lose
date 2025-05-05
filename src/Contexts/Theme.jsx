import { useContext, createContext, useState } from "react";

//Create Context
const ThemeContext = createContext()

//Wrap the theme provider
export const ThemeProvider = ({children}) => {
    //initial state for theme
    const [ theme, setTheme ] = useState(!localStorage.getItem("theme") ? false : JSON.parse(localStorage.getItem("theme")));

    return (
        <ThemeContext.Provider  value ={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

//Create a custom hook to allow the app to consume the context
export const useTheme = () => useContext(ThemeContext);