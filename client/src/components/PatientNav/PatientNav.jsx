import React from 'react'
import './patientnav.css'
import { Link } from 'react-router-dom'

const PatientNav = () => {
    return (
        <div className="patient-nav">
            <div className="container nav">
                <Link to="/" className="logo">Logo</Link>
                <div className="nav-item">
                    
                </div>
            </div>
        </div>
    )
}

export default PatientNav
