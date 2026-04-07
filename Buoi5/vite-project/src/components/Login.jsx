import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { useNavigate } from "react-router-dom"
function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
        navigate("/profile");
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    )
}

export default Login