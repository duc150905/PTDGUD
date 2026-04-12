import { createContext,useState,useContext } from "react";
const NotiContext=createContext();
export const NotiProvider=({children})=>{
    const [message,setMessage]=useState("");
    const [isOpen,setIsOpen]=useState(false);
    const showNoti=(msg)=>{
        setMessage(msg);
        setIsOpen(true);
        setTimeout(()=>setIsOpen(false),2000);
    }
    return (
        <NotiContext.Provider value={{message,isOpen,showNoti}}>
            {children}
        </NotiContext.Provider>
    )
}
export const useNoti=()=>useContext(NotiContext);