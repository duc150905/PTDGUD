import React from 'react'

function StatusBadge({ status }) {
    let backgroundcolor = "";
    if (status === 'online') backgroundcolor = 'green'
    if (status === 'offline') backgroundcolor = 'gray'
    if (status === 'busy') backgroundcolor = 'red'
    return (
        <span style={{
            backgroundColor: backgroundcolor,
            color: "white"
        }}>{status}</span>
    )
}

export default StatusBadge