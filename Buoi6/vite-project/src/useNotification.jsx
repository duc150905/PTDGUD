import React from 'react'
import { useSetRecoilState } from 'recoil'
import { notificationState } from './notificationState'
export const useNotification=()=>{
    const setNoti=useSetRecoilState(notificationState);
    const showNotification=(message,type="success")=>{
        setNoti({
            message,
            type,
            isOpen:true,
        })
    }
    return {showNotification}
}