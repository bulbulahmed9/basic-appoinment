const router = require('express').Router()
const {addDoctor, getDoctorInfo, addSlot} = require('../controllers/doctorController')

// route post /api/addDoctor
// desc add doctor
// access public

router.post('/api/addDoctor', addDoctor)

// get doctor info
// access public

router.get('/api/doctorInfo', getDoctorInfo)

// route put /api/addSlot
// desc:  add date and time slot
// access public

router.put('/api/addSlot', addSlot)


module.exports = router;