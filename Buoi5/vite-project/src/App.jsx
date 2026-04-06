import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import Orders from "./components/Orders"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
