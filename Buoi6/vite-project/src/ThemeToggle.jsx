import React from 'react'
import { themeState } from './themeState'
import { useRecoilState } from 'recoil'
function ThemeToggle() {
    const [theme,setTheme]=useRecoilState(themeState);
    const toggleTheme=()=>{
        const newTheme=theme==="light"?"dark":"light";
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme);
    };
  return (
    <button onClick={toggleTheme}>Đổi sang {theme==="light"?"dark":"light"}</button>
  )
}

export default ThemeToggle