import {
    add_doctor_success,
    add_doctor_failed, loading,
    stop_loading,
    get_info_success,
    get_info_failed,
    add_slot_success,
    add_slot_failed,
    add_slot_loading
}
    from '../types'

const initialState = {
    loading: false,
    slot_loading: false,
    doctor_info: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case loading:
            return {
                ...state,
                loading: true
            }
        case add_slot_loading:
            return {
                ...state,
                slot_loading: true
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
        case add_slot_success:
            return {
                ...state,
                slot_loading: false,
            }
        case add_slot_failed:
            return {
                ...state,
                slot_loading: false
            }
        default:
            return state;
    }
}