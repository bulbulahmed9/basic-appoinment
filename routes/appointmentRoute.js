const router = require('express').Router()
const { makeAppointment, getAppointments } = require('../controllers/appointmentController')


// route post /api/appointment
// desc make an appointment
// access public

router.post('/api/appointment', makeAppointment)


// route get /api/appointments
// desc get all appointments
// access public

router.get('/api/appointments', getAppointments)


module.exports = router;