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

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/doctor" component={Doctor} />
        <Route exact path="/patient" component={Patient} />
      </Switch>
    </div>
  )
}

export default App
