import React from 'react'
import { Link, Outlet } from "react-router-dom"
function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <Link to="Profile">Profile| </Link>
                <Link to="Orders">Orders| </Link>
                <Link to="Settings">Settings</Link>
            </nav>
            <Outlet />

        </div>
    )
}

export default Dashboard