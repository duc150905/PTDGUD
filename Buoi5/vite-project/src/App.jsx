import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import ProductDetail from "./components/ProductDetail"
import Checkout from "./components/Checkout"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
