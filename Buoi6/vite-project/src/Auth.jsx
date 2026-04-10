import React from 'react'
import { useRecoilState } from 'recoil'
import { userState } from './userState'
function Auth() {
    const [user,setUser]=useRecoilState(userState);
    const login =()=>{
        setUser({username:"Duc"});
    }
    const logout=()=>{
        setUser(null);
    }
  return (
    <div>
        {user?(
            <>
            <p>xin chào,{user.username}</p>
            <button onClick={logout}>Logout</button>
            </>
        ):(
            <>
            <button onClick={login}>Login</button>
            </>
        )}
    </div>
  )
}

export default Auth