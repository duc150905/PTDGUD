import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import ProductDetail from "./components/ProductDetail"
import Products from "./components/Products"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home|</Link>
          <Link to="/Contact">Contact|</Link>
          <Link to="/About">About|</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
