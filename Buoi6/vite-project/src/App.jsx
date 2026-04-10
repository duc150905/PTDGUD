
import './App.css'
import Auth from './Auth'
import Header from './Header'
import Profile from './Profile'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import ProductList from './ProductList'
import Cart from './Cart'
function App() {
  return (
     <div style={{ display: "flex", gap: "50px" }}>
      <ProductList />
      <Cart />
    </div>
  )
}

export default App
