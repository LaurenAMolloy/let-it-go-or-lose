import React from 'react'
import { Link } from 'react-router-dom'
import useSound from 'use-sound'
import iceSfx  from '../../assets/iceSfx.mp3'

// const enterButton = () => {
//   const [play] = useSound(iceSfx);
// }

export default function EnterPage() {
  const [play] = useSound(iceSfx);

  return (
    <div className="enter-page">
    <h1 className="enter-title">Welcome to Let it Go - or Lose!</h1>
    <h4>Can you save Arrendale from eternal winter?</h4>
    <Link to="/home">
      <button onClick={play} className="enterBtn">Enter</button>
    </Link>
  </div>
  )
}

