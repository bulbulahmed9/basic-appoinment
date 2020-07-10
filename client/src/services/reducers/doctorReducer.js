import {
    add_doctor_success,
    add_doctor_failed, loading,
    stop_loading,
    get_info_success,
    get_info_failed
}
    from '../types'

const initialState = {
    loading: false,
    doctor_info: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case loading:
            return {
                ...state,
                loading: true
            }
        case add_doctor_success:
            return {
                ...state,
                loading: false,
            }
        case add_doctor_failed:
            return {
                ...state,
                loading: false
            }
        case get_info_success:
            return {
                ...state,
                loading: false,
                doctor_info: action.payload
            }
        case get_info_failed:
            return {
                ...state,
                loading: false,
                doctor_info: []
            }
        default:
            return state;
    }
}