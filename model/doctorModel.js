const mongoose = require('mongoose')

// Doctor Schema
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    schedule: [
        {
            date: {
                type: String,
                trim: true
            },
            slot: {
                type: String,
                trim: true
            }
        }
    ]

}, { timestamps: true })


module.exports = mongoose.model('Doctor', doctorSchema)