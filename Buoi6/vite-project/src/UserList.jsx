import React from 'react'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from './userState'
import useUsers from './useUsers'
function UserList() {
    const { data, loading, error } = useRecoilValue(userState);
    const { fetchusers } = useUsers();
    useEffect(() => {
        fetchusers();
    }, [])
    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>
    return (
        <div>
            {data.map(user => (
                <div key={user.id}>
                    <p>{user.name}-{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UserList