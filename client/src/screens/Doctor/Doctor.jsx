import React, { useState } from 'react'
import DoctorNav from '../../components/DoctorNav/DoctorNav.jsx'
import './doctor.css'
import PropTypes from 'prop-types'


import { connect } from 'react-redux'
import { addDoctor } from '../../services/actions/doctorAction'
import SmallLoader from '../../components/Loader/SmallLoader.jsx'

const Doctor = ({ addDoctor, loading }) => {

    // form data
    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: ""
    })

    // destructure form data
    const { name, email, phone } = info;

    // submit
    const submitHandler = async (e) => {
        e.preventDefault()
        await addDoctor({ name, email, phone })
        setInfo({
            name: "",
            email: "",
            phone: ""
        })
    }

    return (
        <>
            <DoctorNav />
            <div className="container doctor">
                <div className="d-content">
                    <h4>Add doctor</h4>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                onChange={e => setInfo({ ...info, name: e.target.value })}
                                type="text"
                                className="form-control form-control-sm"
                                value={name}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label >Email</label>
                            <input
                                onChange={e => setInfo({ ...info, email: e.target.value })}
                                type="email"
                                className="form-control form-control-sm"
                                value={email}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                onChange={e => setInfo({ ...info, phone: e.target.value })}
                                type="number"
                                className="form-control form-control-sm"
                                value={phone}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Submit {loading && <SmallLoader />} </button>
                    </form>
                </div>
            </div>
        </>
    )
}

Doctor.propTypes = {
    addDoctor: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    loading: state.doctorReducer.loading
})

export default connect(mapStateToProps, { addDoctor })(Doctor)
