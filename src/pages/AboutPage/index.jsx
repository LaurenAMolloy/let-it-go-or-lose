import React from 'react'
import { useTheme } from '../../Contexts/Theme';


export default function AboutPage() {

  const {theme, setTheme} = useTheme();

  function handleToggle() {
    console.log("click")
    setTheme(!theme)
  }

  return (
    <>
    <div className="about-container">
    <h1>How To Play...</h1>
    <button onClick={handleToggle} className="themeToggle">
      {theme ? "Ice Mode" : "Winter Mode"}
      </button>
    <div className="rules">
    <ul>
      <li>Try to guess the random word</li>
      <li>Your goal is to guess the word and save arrendale from eternal winter.</li>
      <li>You have a total of eight guesses.</li>
      <li>For each guess you get wrong one character from frozen will be lost.</li>
      <li><span>Good Luck</span></li>
    </ul>
    </div>
    </div>
    </>
  )
}
