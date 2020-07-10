import React from 'react'
import './App.css'
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Homepage from './screens/Homepage/Homepage.jsx'
import Doctor from './screens/Doctor/Doctor';
import Patient from './screens/Patient/Patient';
import AddTime from './screens/Doctor/AddTime.jsx';
import Appointment from './screens/Appointment/Appointment.jsx';

// react toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/doctor" component={Doctor} />
        <Route exact path="/patient" component={Patient} />
        <Route exact path="/add-time" component={AddTime} />
        <Route exact path="/appointments" component={Appointment} />
      </Switch>
    </div>
  )
}

export default App
