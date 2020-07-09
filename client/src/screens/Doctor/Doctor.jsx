import React from 'react'
import DoctorNav from '../../components/DoctorNav/DoctorNav.jsx'
import './doctor.css'

const Doctor = () => {
    return (
        <>
            <DoctorNav />
            <div className="container doctor">
                <div className="d-content">
                    <h4>Add doctor</h4>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label >Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Doctor
