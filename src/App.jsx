import './App.css'
import { Header } from './components'
import { Status } from './components'
import { Chips } from './components'
import { Word } from './components'
import { Keyboard } from './components'
import { useWord } from './Contexts/Word'

function App() {
  const { word } = useWord();

  return (
    <> 
    <Header />
    <Status />
    <Chips />
    <Word  />
    <Keyboard />
    </>
  )
}

export default App
