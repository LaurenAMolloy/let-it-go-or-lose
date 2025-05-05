import React, { useEffect } from 'react';
import { useTheme } from '../../Contexts/Theme';
import iceSfx from '../../assets/iceSfx.mp3';
import useSound from 'use-sound';

export default function ThemeBtn
() {

    const {theme, setTheme} = useTheme();
    const [play] = useSound(iceSfx);
    
    //setting Theme from local storage
    useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme))
    console.log('theme', theme)
    }, [theme])

    const handleToggle = () => {
        play();
        setTheme(!theme)
    }

  return (
    <button onClick={handleToggle} className="themeToggle">
    {theme ? "Ice Mode" : "Winter Mode"}
    </button>
  )
}
