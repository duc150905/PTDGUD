import React from 'react'
import { useSetRecoilState } from 'recoil'
import { searchState } from './searchState'
function useSearch() {
    const setSearch = useSetRecoilState(searchState);
    const searchUsers = async (keyword) => {
        if (!keyword) return;
        setSearch(prev => ({
            ...prev,
            loading: true,
            error: null,
        }))
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users?name_like=${keyword}`
            );
            const data = await res.json();
            setSearch({
                data,
                loading: false,
                error: null,
            });
        } catch (error) {
            setSearch({
                data: [],
                loading: false,
                error: "Lỗi API",
            });
        }
    }
    return {searchUsers}
}

export default useSearch