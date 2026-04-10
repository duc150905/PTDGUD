import { useRecoilValue } from 'recoil'
import { themeState } from './themeState'
import ThemeToggle from './ThemeToggle'
import './App.css'
import { useEffect } from 'react';
import ComA from './ComA';
import ComB from './ComB';
function App() {
  // const theme = useRecoilValue(themeState);
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme])
  return (
    // <div><ThemeToggle /></div>
    <div>
      <ComA />
      <ComB />
    </div>
  )
}

export default App
