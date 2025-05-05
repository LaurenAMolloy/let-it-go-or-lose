import React from 'react'
import { Link } from 'react-router-dom'
import useSound from 'use-sound'
import iceSfx  from '../../assets/iceSfx.mp3'
import { useNavigate } from 'react-router-dom'

export default function EnterPage() {
  const [play] = useSound(iceSfx);
  const navigate = useNavigate();

  const handleEnter = () => {
    play()
    navigate("/home")
  }

  return (
    <div className="enter-page">
    <h1 className="enter-title">Welcome to Let it Go - or Lose!</h1>
    <h4>Can you save Arrendale from eternal winter?</h4>
    <button onClick={handleEnter} className="enterBtn">Enter</button>
    
  </div>
  )
}

