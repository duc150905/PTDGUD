import React from 'react'
import { useSetRecoilState } from 'recoil'
import { authState } from './authState'
function useAuth() {
    const setAuth = useSetRecoilState(authState);
    const login = async (username, password) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data=await res.json();
            const fakeToken = "abc123token";
            setAuth({token:fakeToken});
            localStorage.setItem("token",fakeToken)
        } catch (error) {
            console.log(error);
        }
    }
    const logout=()=>{
        setAuth({token:null});
        localStorage.removeItem("token");
    }
    return {login,logout}
}

export default useAuth