import './App.css'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import Nav from './layouts/Nav';
import { useTheme } from './Contexts/Theme';
import ParticlesBackground from './components/Particles';
import { useGuess } from './Contexts/GuessedLetters';

function App() {
  const { theme } = useTheme();
  const { isGameWon} = useGuess()
  //use effect watches theme and applies class to body
  useEffect(() => {
    document.body.className = theme ? "winter-mode" : ""
  }, [theme]);
  
  return (
    <> 
      { !isGameWon && <ParticlesBackground />}
      <Nav />
      <Routes>
        {/* All of my routes go here! */}
        {/* localhost:5173/ */}
        <Route path="/" element={<Pages.EnterPage />} />
        <Route path="/home" element={<Pages.HomePage />} />
        <Route path="/about" element={<Pages.AboutPage />} /> 
      </Routes>
     
    </>
  )
}

export default App
