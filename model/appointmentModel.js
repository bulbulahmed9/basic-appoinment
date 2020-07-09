const mongoose = require('mongoose')

// Doctor Schema
const appointmentSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: Number,
        trim: true,
        required: true
    },
    schedule: {
        date: String,
        slot: String
    }

}, { timestamps: true })


module.exports = mongoose.model('Appointment', appointmentSchema)