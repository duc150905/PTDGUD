import React from 'react'
import { useState, useEffect } from 'react'
function Bai2() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/userss");
                const data = await res.json();
                if (!res.ok) throw new Error("API lỗi")
                setData(data);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        }
        setTimeout(() => {
            fetchdata();
        }, 2000);

    }, [])
    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error.message}</h2>
    return (
        <div>
            {data.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Bai2