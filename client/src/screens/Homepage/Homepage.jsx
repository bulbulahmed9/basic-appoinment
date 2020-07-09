import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'

const Homepage = () => {
    return (
        <>
            <div className="home">
                <h3 className="text-center text-white">Welcome to Doctor's Appointment</h3>
                <div className="text-center mt-5">
                    <Link to="/doctor" className="btn btn-primary mr-3">Visit as Doctor</Link>
                    <Link to="/patient" className="btn btn-info">Visit as Patient</Link>
                </div>
            </div>
        </>
    )
}

export default Homepage
