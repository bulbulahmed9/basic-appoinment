import { combineReducers } from "redux";
import doctorReducer from './doctorReducer'
import appointmentReducer from './appointmentReducer'

export default combineReducers({
    doctorReducer,
    appointmentReducer
});