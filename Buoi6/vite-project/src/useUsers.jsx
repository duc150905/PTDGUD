import React from 'react'
import { useSetRecoilState } from 'recoil'
import { userState } from './userState'
function useUsers() {
    const setUser = useSetRecoilState(userState);
    const fetchusers = async () => {
        setUser(prev => ({
            ...prev,
            loading: true,
            error: null,
        }));
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUser({
                data: data,
                loading: false,
                error: null,
            })
        } catch (err) {
            setUser({
                data:[],
                loading:false,
                error:"lỗi khi fetch api"
            })
        }
    }

    return {fetchusers}
}

export default useUsers