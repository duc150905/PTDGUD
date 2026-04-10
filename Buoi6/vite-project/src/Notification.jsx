import React from 'react'
import { useRecoilState } from 'recoil'
import { notificationState } from './notificationState'
import { useEffect } from 'react'
function Notification() {
    const [noti, setNoti] = useRecoilState(notificationState);
    useEffect(() => {
        if (noti.isOpen) {
            const timer = setTimeout(() => {
                setNoti({ ...noti, isOpen: false });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [noti.isOpen]);

    if (!noti.isOpen) return null;
    return (
        <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px 20px",
        color: "white",
        borderRadius: "5px",
        background:
          noti.type === "success"
            ? "green"
            : noti.type === "error"
            ? "red"
            : "gray",
      }}
    >
      {noti.message}
    </div>
    )
}

export default Notification