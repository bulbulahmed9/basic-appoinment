import {
    make_appointment_success,
    make_appointment_failed,
    make_appointment_loading,
    get_appointments_success,
    get_appointments_failed,
    get_appointments_loading,
    loading
}
    from '../types'
import { toast } from 'react-toastify'
import axios from 'axios'
import { makeAppointmentURL, getAppointmentsURL } from '../../API/api'


// make an appointment
export const makeAppointment = ({ newDoctorId, patientName, phone, selectedDate, slot }) => async dispatch => {


    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({ id: newDoctorId, patientName, phone, date: selectedDate, slot })

    try {
        dispatch({ type: make_appointment_loading })

        const res = await axios.post(makeAppointmentURL, body, config)
        dispatch({ type: make_appointment_success })
        toast(res.data.msg)

    } catch (err) {
        dispatch({ type: make_appointment_failed })
        toast('Something went wrong')
        console.log(err.message);

    }
}


// make an appointment
export const getAppointments = () => async dispatch => {

    try {
        dispatch({ type: get_appointments_loading })

        const res = await axios.get(getAppointmentsURL)
        dispatch({ type: get_appointments_success, payload: res.data.appointments })

    } catch (err) {
        dispatch({ type: get_appointments_failed })
        toast('Something went wrong')
        console.log(err.message);
    }
}