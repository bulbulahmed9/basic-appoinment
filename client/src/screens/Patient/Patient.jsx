import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getInfo } from '../../services/actions/doctorAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { makeAppointment } from '../../services/actions/appointmentAction'


// date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BigLoader from '../../components/Loader/BigLoader'
import SmallLoader from '../../components/Loader/SmallLoader'

// date format
var dateFormat = require('dateformat');




const Patient = ({ getInfo, loading, infos, makeAppointment, make_appoint_loading }) => {


    // form data -> doctor name, patient name, phone number
    const [form, setForm] = useState({
        doctorId: "",
        patientName: "",
        phone: ""
    })


    // destructure form data
    const { doctorId, patientName, phone } = form;

    // date picker state
    const [date, setDate] = useState(new Date())

    // all Time slots... 
    const [slots, setSlots] = useState(['1pm-2pm', '4pm-5pm', '6pm-7pm'])

    // get selected slot, it's initial value is slots[0], that means 1pm-2pm
    const [slot, setSlot] = useState(slots[0])

    // handle change date
    const handleChange = (date) => {
        setDate(date)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        let newDoctorId = infos.length && !doctorId ? infos[0]._id : doctorId
        const selectedDate = dateFormat(date, "dd/mm/yyyy")

        makeAppointment({ newDoctorId, patientName, phone, selectedDate, slot })
        console.log(newDoctorId, patientName, phone, selectedDate, slot);
    }

    // get doctor info, so that we can show list of doctor name in dropdown
    useEffect(() => {
        getInfo()
    }, [])

    return (

        loading ? <BigLoader /> :

            <div className="container patient my-5">
                <Link className="btn btn-success btn-sm mt-3" to="/">Back to Home</Link>

                {
                    infos.length ? <h4>Make an appointment</h4> : <h4 className="text-danger">Currently no schedule is available by doctor</h4>
                }

                {/* Appointment Form  */}
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Select Doctor Name</label>
                        <select
                            onChange={e => {
                                setForm({ ...form, doctorId: e.target.value })
                            }
                            }
                            disabled={!infos.length && true}
                            className="form-control form-control-sm"
                        >
                            {
                                infos.map(info => {
                                    return <option key={info._id} value={info._id}> {info.name} </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Patient Name</label>
                        <input
                            disabled={!infos.length && true}
                            onChange={e => setForm({ ...form, patientName: e.target.value })}
                            type="text"
                            className="form-control form-control-sm"
                            value={form.patientName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label >Your phone number</label>
                        <input
                            disabled={!infos.length && true}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            type="number"
                            className="form-control form-control-sm"
                            value={form.phone}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Select Date(day/month/year)</label> <br />
                        <DatePicker
                            disabled={!infos.length && true}
                            className="form-control form-control-sm"
                            dateFormat="dd/MM/yyyy"
                            selected={date}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">
                        <label>Select Time Slot</label>
                        <select
                            disabled={!infos.length && true}
                            className="form-control form-control-sm"
                            onChange={e => setSlot(e.target.value)}
                        >
                            {
                                slots.map((slot, index) => {
                                    return <option key={index} value={slot}> {slot} </option>
                                })
                            }
                        </select>
                    </div>
                    <button disabled={!infos.length && true} type="submit" className="btn btn-success">Submit
                    {make_appoint_loading && <SmallLoader />}
                    </button>
                </form>

                {/* Appointment Form  */}
            </div>
    )
}

Patient.propTypes = {
    getInfo: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    infos: PropTypes.array.isRequired,
    makeAppointment: PropTypes.func.isRequired,
    make_appoint_loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    loading: state.doctorReducer.loading,
    infos: state.doctorReducer.doctor_info,
    make_appoint_loading: state.appointmentReducer.loading
})

export default connect(mapStateToProps, { getInfo, makeAppointment })(Patient)
