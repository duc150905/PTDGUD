
import './App.css'
import Auth from './Auth'
import Header from './Header'
import Profile from './Profile'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import ProductList from './ProductList'
import Notification from './Notification'
import Cart from './Cart'
import UserList from './UserList'
import SearchUser from './SearchUser'
import { useRecoilValue } from 'recoil'
import { authState } from './authState'
import Login from './Login'
import Logout from './Logout'
import { AuthProvider, useAuth } from './AuthContext'
import { ProductProvider } from './ProductContext'
import { CartProvider } from './CartContext'
import { NotiProvider } from './NotiContext'
function MainApp() {
  const { token, login, logout } = useAuth();
  return (
    <div>
      <h1>Mini App</h1>
      {!token ? (
        <button onClick={login}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
      <Notification />
      <ProductList />
      <Cart />
    </div>
  )
}
function App() {

  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <NotiProvider>
            <MainApp />
          </NotiProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
