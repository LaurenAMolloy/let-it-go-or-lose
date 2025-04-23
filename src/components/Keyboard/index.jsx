import React from 'react'
import { nanoid } from 'nanoid';

export default function Keyboard() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keys = alphabet.toString().split("").map((letter, index) => <button className="keyboardBtn" key={nanoid()}>{letter}</button>);
    

  return (
    <section className="keyboard">
        {keys}
        <button class="newGameBtn">New Game</button>
    </section>

  )
}
