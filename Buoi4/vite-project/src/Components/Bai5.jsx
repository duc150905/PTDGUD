import React from 'react'
import { useState, useEffect } from 'react'
function Bai5() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //GET TODO
    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const res = await fetch("http://localhost:3001/todos");
                const data = await res.json();
                setTodos(data);
            } catch (error) {
                setError("Failed to fetch todo");
            }
        }
        fetchTodo();
    }, [])
    // POST TODO
    const handleAddTodo = async () => {
        if (newTodo.trim() === "") {
            setError("Vui lòng nhập todo");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("http://localhost:3001/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: newTodo
                })
            });
            const data = await res.json();
            setTodos([...todos, data]);
            setNewTodo("");
        } catch (error) {
            setError("Failed to add todo");
        } finally {
            setLoading(false);
        }
    }
    //DELETE TODO
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/todos/${id}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            setError("Failed to delete todo");
        }
    }
    return (
        <div>
            <input type="text" className='form-control' placeholder='new todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={handleAddTodo} disabled={loading} className='btn btn-primary mt-2'>{loading ? "Adding" : "Add"}</button>
            {error && (
                <p style={{ color: "red" }}>{error}</p>
            )}

            {todos.map((todo) => (
                <div key={todo.id} style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                    <p>{todo.title}</p>
                    <button onClick={() => handleDelete(todo.id)} className='btn btn-danger'>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Bai5