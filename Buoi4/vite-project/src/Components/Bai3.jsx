import React from 'react'
import { useState, useEffect } from 'react'
function Bai3() {
    const [user, setUser] = useState(null);
    const [userID, setUserID] = useState("");
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                if (!res.ok) throw new Error("User not found");
                const data = await res.json();
                setUser(data);
                setError(null);
            } catch (error) {
                setError(error)
            }
        }
        fetchdata();

    }, [userID])
    return (
        <div>
            <input type="number" className='form-control' placeholder='Nhập ID:(1-10)' value={userID} onChange={(e) => setUserID(e.target.value)} />
            {error && <p className='text-danger mt-2'>{error.message}</p>}
            {!error && user && (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </div>
            )}

        </div>
    )
}

export default Bai3