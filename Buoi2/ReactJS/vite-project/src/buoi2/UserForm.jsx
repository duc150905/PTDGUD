import React from 'react'
import { useState } from 'react'

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <h2>Login Form</h2>
            <input type="text" className='form-control mb-3' placeholder='Tên' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className='form-control mb-3' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <h3>Dữ liệu đang nhập</h3>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}

export default UserForm