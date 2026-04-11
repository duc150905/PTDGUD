import React from 'react'
import useAuth from './useAuth'
import { useState } from 'react'
function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {login}=useAuth();
    const handleLogin=()=>{
        login(username,password);
    }
  return (
    <div>
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login