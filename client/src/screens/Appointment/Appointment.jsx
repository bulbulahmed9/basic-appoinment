import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAppointments } from '../../services/actions/appointmentAction'
import PropTypes from 'prop-types'
import BigLoader from '../../components/Loader/BigLoader'
import DoctorNav from '../../components/DoctorNav/DoctorNav'


const Appointment = ({ getAppointments, loading, appointments }) => {

    useEffect(() => {
        getAppointments()
    }, [])

    return (
        <div>
            <DoctorNav />
            {
                loading ? <BigLoader /> : <div>
                    {
                        appointments.length ? <div className="container mt-5">

                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Doctor Name</th>
                                        <th scope="col">Patient Name</th>
                                        <th scope="col">Patient contacts</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        appointments.map(app => {
                                            return <tr key={app._id}>
                                                <th scope="col"> {app.doctorName} </th>
                                                <td scope="col"> {app.patientName} </td>
                                                <td scope="col"> {app.phone} </td>
                                                <td scope="col"> {app.date}  </td>
                                                <td scope="col"> {app.slot} </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>


                        </div> : <h4>Currently there is no appointsment</h4>
                    }
                </div>
            }
        </div>
    )
}

Appointment.propTypes = {
    getAppointments: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    appointments: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    loading: state.appointmentReducer.loading,
    appointments: state.appointmentReducer.allAppointments
})

export default connect(mapStateToProps, { getAppointments })(Appointment)
