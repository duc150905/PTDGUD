import React from 'react'
import { useNoti } from './NotiContext'
function Notification() {
  const { message, isOpen } = useNoti();
  if (!isOpen) return null;
  return <div style={{ background: "yellow" }}>{message}</div>;
}

export default Notification