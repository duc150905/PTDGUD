import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { searchState } from './searchState'
import useSearch from './useSearch'
function SearchUser() {
    const [keyword, setKeyword] = useState("");
    const { data, loading, error } = useRecoilValue(searchState);
    const { searchUsers } = useSearch();
    useEffect(() => {
        const timer = setTimeout(() => {
            searchUsers(keyword);
        }, 500)
        return () => clearTimeout(timer)
    }, [keyword]);
    return (
        <div>
            <input type="text" placeholder='Nhập tên...' value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            {loading && <p>Loading...</p>}
            {error && <p> {error}</p>}
            {data.map(user => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default SearchUser