import React from 'react'
import './doctornav.css'
import { Link } from 'react-router-dom'

const DoctorNav = () => {
    return (
        <div className="doctor-nav">
            <div className="container nav">
                <Link to="/" className="logo">Logo</Link>
                <div className="nav-item">
                    <Link to="/">Home</Link>
                    <Link to="/add-time">Add time slot</Link>
                    <Link to="/appointments">Appointments</Link>
                </div>
            </div>
        </div>
    )
}

export default DoctorNav
