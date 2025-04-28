import React from 'react'
import { Link } from 'react-router-dom';
import snowflake from '../../assets/img/snowflake.png'
  
export default function Nav() {
  return (
    <nav>
        <img className="logo" src={snowflake} alt ="Logo"></img>
        <ul className='nav'>
            <Link to="/home">Play the Game</Link>
            <Link to="/about">How to Play</Link>
        </ul>
    </nav>
  )
}
