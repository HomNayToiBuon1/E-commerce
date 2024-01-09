import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListProd from './components/ListProd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> <ListProd/></div>
    </>
  )
}

export default App
