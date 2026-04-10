import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from './userState'
function Header() {
    const user=useRecoilValue(userState);
  return (
    <h2>
        {user?`user:${user.username}`:"chưa đăng nhập"}
    </h2>
  )
}

export default Header