
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
function App() {
  const { token } = useRecoilValue(authState)
  return (
    <div>
      {!token ? (
        <Login />
      ) : (
        <>
          <Logout />
          <UserList />
        </>
      )}
    </div>
  )
}

export default App
