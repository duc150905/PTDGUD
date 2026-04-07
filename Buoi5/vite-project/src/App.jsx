import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Orders from "./components/Orders"
import './App.css'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
