
import './App.css'
import Auth from './Auth'
import Header from './Header'
import Profile from './Profile'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import ProductList from './ProductList'
import Notification from './Notification'
import Cart from './Cart'
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Notification />
      <h1>Mini Shop</h1>
      <ProductList />
    </div>
  )
}

export default App
