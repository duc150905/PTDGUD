import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from './todoState'
function TodoInput() {
  const [text,setText]=useState("");
  const [todos,setTodos]=useRecoilState(todoState);
  const addTodo=()=>{
    if(text.trim()==="") return;
    const newTodo={
        id:Date.now(),
        text:text,
    };
    setTodos([...todos,newTodo]);
    setText("");
  }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='nhập todo:'/>
        <button onClick={addTodo}>Thêm</button>
    </div>
  )
}

export default TodoInput