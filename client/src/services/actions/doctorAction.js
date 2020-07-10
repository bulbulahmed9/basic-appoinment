import {
    add_doctor_success,
    add_doctor_failed,
    loading,
    stop_loading,
    get_info_success,
    get_info_failed
}
    from '../types'

import { toast } from 'react-toastify'
import axios from 'axios'
import { doctorInfoURL, addDoctorURL } from '../../API/api'


// add doctor info

export const addDoctor = ({ name, email, phone }) => async dispatch => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({ name, email, phone })


    try {
        dispatch({
            type: loading
        })

        let res = await axios.post(addDoctorURL, body, config)

        dispatch({
            type: add_doctor_success,
        });

        toast(res.data.msg)

    } catch (err) {
        dispatch({
            type: add_doctor_failed
        })
        toast("Something went wrong")
        console.log(err.message)
    }
}

// get doctor info

export const getInfo = () => async dispatch => {
    try {

        dispatch({
            type: loading
        })
        const res = await axios.get(doctorInfoURL)
        dispatch({
            type: get_info_success,
            payload: res.data.doctor
        })

    } catch (err) {
        console.log(err.message);
        dispatch({
            type: get_info_failed
        })
    }
}