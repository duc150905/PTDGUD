import React from 'react'
import { atom } from 'recoil'
export const notificationState=atom({
    key:"notificationState",
    default:{
        message:"",
        type:"success",
        isOpen:false,
    }
})
