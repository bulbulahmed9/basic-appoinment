import {
    make_appointment_success,
    make_appointment_failed,
    make_appointment_loading,
    get_appointments_success,
    get_appointments_failed,
    get_appointments_loading
}
    from '../types'

const initialState = {
    loading: false,
    allAppointments: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case make_appointment_loading:
            return {
                ...state,
                loading: true,
            }
        case get_appointments_loading:
            return{
                ...state,
                loading: true
            }
        case make_appointment_success:
            return {
                ...state,
                loading: false
            }
        case make_appointment_failed:
            return {
                ...state,
                loading: false
            }
        case get_appointments_success:
            return{
                ...state,
                loading: false,
                allAppointments: action.payload
            }
        case get_appointments_failed:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}