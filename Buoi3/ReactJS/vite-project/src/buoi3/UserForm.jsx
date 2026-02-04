import React from 'react'
import { useState } from 'react'

function UserForm() {
    const [form, setForm] = new useState({
        name: '',
        email: '',
        age: ''

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Thông tin người dùng</h2>
            <input type="text" className='form-control mb-3' placeholder='name' name='name' value={form.name} onChange={handleChange} />
            <input type="text" className='form-control mb-3' placeholder='email' name='email' value={form.email} onChange={handleChange} />
            <input type="text" className='form-control mb-3' placeholder='age' name='age' value={form.age} onChange={handleChange} />
            <button type='submit' className='btn btn-primary form-control'>Submit</button>
        </form>
    )
}

export default UserForm