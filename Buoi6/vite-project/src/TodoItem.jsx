import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from './todoState'
function TodoItem({ todo }) {
    const [todos, setTodos] = useRecoilState(todoState);
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const deleteTodo = () => {
        const newList = todos.filter((t) => t.id !== todo.id);
        setTodos(newList);
    }
    const saveEdit = () => {
        const newList = todos.map((t) =>
            t.id == todo.id ? { ...t, text: newText } : t);
        setTodos(newList);
        setIsEditing(false);
    }
    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={saveEdit}>Lưu</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Sửa</button>
                    <button onClick={deleteTodo}>Xóa</button>
                </>
            )}
        </div>
    )
}

export default TodoItem