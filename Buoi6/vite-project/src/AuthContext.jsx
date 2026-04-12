import React from 'react'
import { createContext,useState,useContext } from 'react'
const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token")||null);
    const login=()=>{
        const fakeToken="abc123";
        setToken(fakeToken);
        localStorage.setItem("token",fakeToken);
    }
    const logout=()=>{
        setToken(null);
        localStorage.removeItem("token");
    }
    return (
        <AuthContext.Provider value={{token,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext);
