import React from 'react'
import { useTheme } from '../../Contexts/Theme'

export default function Header() {
  const {theme, setTheme} = useTheme();

  function handleToggle() {
    console.log("click")
    setTheme(!theme)
  }
  return (
    <>
    <h1>Let It Go - Or Lose!</h1>
    <p>"Save Arendelle! You’ve got 8 chances stop eternal winter."</p>
    <button onClick={handleToggle} className="themeToggle">
      {theme ? "Ice Mode" : "Winter Mode"}
      </button>
    </>
  )
}
