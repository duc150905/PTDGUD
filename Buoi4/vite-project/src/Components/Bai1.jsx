import React from 'react'
import { useState, useEffect } from 'react'
function Bai1() {
    const [users, setUsers] = useState([]);
    //   useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((reponse)=> reponse.json())
    //     .then((data)=> setUsers(data))
    //   },[])
    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        }
        fetchdata();
    }, [])
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Bai1