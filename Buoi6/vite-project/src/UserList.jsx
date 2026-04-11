import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from './authState'
function UserList() {
    const { token } = useRecoilValue(authState);
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h2>User List</h2>
            <button onClick={fetchUsers}>Fetch Users</button>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList