import React from 'react'
import { Link } from 'react-router-dom'

export default function EnterPage() {
  return (
    <div className="enter-page">
    <h1>Welcome to Let it Go - or Lose!</h1>
    <Link to="/home">
      <button className="enterBtn">Enter</button>
    </Link>
  </div>
  )
}

