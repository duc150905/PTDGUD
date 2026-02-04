import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './buoi2/Header'
import Footer from './buoi2/Footer'
import StudentInfo from './buoi2/StudentInfo'
import Counter from './buoi2/Counter'
import UserForm from './buoi2/UserForm'
import StatusBadge from './buoi2/StatusBadge'

function App() {
  const [status, setStatus] = useState("");
  return (
    <>
      <div>
        <button onClick={() => setStatus("online")} style={{ color: 'black' }}>online</button>
        <button onClick={() => setStatus("offline")} style={{ color: 'black' }}>offline</button>
        <button onClick={() => setStatus("busy")} style={{ color: 'black' }}>busy</button>
      </div>
      <StatusBadge status={status}></StatusBadge>
    </>
  )
}

export default App
