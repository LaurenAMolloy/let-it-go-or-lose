import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { WordProvider } from './Contexts/Word.jsx'
import { GuessedProvider } from './Contexts/GuessedLetters.jsx'
import { ThemeProvider } from './Contexts/Theme.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
      <WordProvider>
        <GuessedProvider>
            <App />
        </GuessedProvider>
      </WordProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>,
)
