import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getInfo } from '../../services/actions/doctorAction'
import Bigloader from '../../components/Loader/BigLoader.jsx'
import DoctorNav from '../../components/DoctorNav/DoctorNav'
import { Link } from 'react-router-dom'

// date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify'

// date format
var dateFormat = require('dateformat');

const AddTime = ({ getInfo, loading, infos }) => {

    // date picker state
    const [date, setDate] = useState(new Date())


    // get doctor id based on user selected option and pass it to back end with request, so that we can determine in back end , which doctor time slot it is...
    const [doctorId, setDoctorId] = useState("")

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
        let id = infos.length && !doctorId ? infos[0]._id : doctorId
        const selectedDate = dateFormat(date, "dd/mm/yyyy")
        console.log(selectedDate, id, slot);
    }

    // get doctor info, so that we can show list of doctor name in dropdown
    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div>
            <DoctorNav />
            {
                loading ? <Bigloader /> : <div className="container mt-3">
                    {
                        infos.length ? <h3>Add Time Slot</h3> : <div>
                            <h5>Currently There is no doctor  information, so you can't add time slot</h5>
                            <Link className="btn btn-primary btn-sm" to="/doctor">Add Doctor Information</Link>
                        </div>
                    }
                    <form onSubmit={submitHandler}>
                        <label>Select Date(day/month/year)</label> <br />
                        <DatePicker
                            disabled={!infos.length && true}
                            className="form-control form-control-sm"
                            dateFormat="dd/MM/yyyy"
                            selected={date}
                            onChange={handleChange}
                        />
                        <div className="form-group">
                            <label className="mt-3">Doctor Name(Select via dropdown)</label>
                            <select
                                disabled={!infos.length && true}
                                onChange={(e) => setDoctorId(e.target.value)}
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
                        <button disabled={!infos.length && true} type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            }
        </div>
    )
}

AddTime.propTypes = {
    getInfo: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    infos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    loading: state.doctorReducer.loading,
    infos: state.doctorReducer.doctor_info
})

export default connect(mapStateToProps, { getInfo })(AddTime)
