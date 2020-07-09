const mongoose = require('mongoose')

// Doctor Schema
const appointmentSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    slot: {
        type: String,
        trim: true
    }

}, { timestamps: true })


module.exports = mongoose.model('Appointment', appointmentSchema)