import React from 'react'
import { useTheme } from '../../Contexts/Theme'
import useSound from 'use-sound'
import iceSfx from '../../assets/iceSfx.mp3'

export default function Header() {
  const {theme, setTheme} = useTheme();
  const [play] = useSound(iceSfx);

  function handleToggle() {
    console.log("click")
    setTheme(!theme)
  }

  function buttonFx() {
    play();
    handleToggle()
  }
  return (
    <>
    <h1>Let It Go - Or Lose!</h1>
    <p>"Save Arendelle! You’ve got 8 chances stop eternal winter."</p>
    <button onClick={buttonFx} className="themeToggle">
      {theme ? "Ice Mode" : "Winter Mode"}
      </button>
    </>
  )
}
