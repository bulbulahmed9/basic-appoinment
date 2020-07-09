import React from 'react'
import { Link } from 'react-router-dom'

const Patient = () => {
    return (
        <div className="container patient">
            <Link className="btn btn-success btn-sm m-3" to="/">Back to Home</Link>
        </div>
    )
}

export default Patient
