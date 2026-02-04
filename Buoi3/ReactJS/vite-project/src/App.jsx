import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './buoi3/UserForm'
import DigitalClock from './buoi3/DigitalClock'
import ProductFilter from './buoi3/ProductFilter'
import Stopwatch from './buoi3/Stopwatch'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stopwatch></Stopwatch>
    </>
  )
}

export default App
