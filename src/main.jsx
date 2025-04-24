import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { WordProvider } from './Contexts/Word.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WordProvider>
    <App />
    </WordProvider>
  </StrictMode>,
)
