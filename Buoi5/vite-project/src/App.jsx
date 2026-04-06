import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home|</Link>
          <Link to="/Contact">Contact|</Link>
          <Link to="/About">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
