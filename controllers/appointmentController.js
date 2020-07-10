const Appointment = require('../model/appointmentModel')
const Doctor  = require('../model/doctorModel')

const makeAppointment = async (req, res) => {
    try {

        const {id, patientName, phone, date, slot } = req.body

        if ( !patientName || !phone || !date || !slot || !id) {
            return res.json({
                msg: "Please provide all fields"
            })
        }

        const doctor = await Doctor.findById(id)

        const isExistSlot = doctor.schedule.find(sch => sch.date === date.trim() && sch.slot === slot.trim())
        

        if (!isExistSlot) {
            return res.json({
                msg: "This schedule is not available by doctor"
            })
        }
        // const currentDoctorName = doc


        const isExistAppointment = await Appointment.find({ doctorName: doctor.name, date: date.trim(), slot: slot.trim() })
        console.log(isExistAppointment);
        

        if (isExistAppointment.length) {
            return res.json({
                msg: "This slot is already booked"
            })
        }

        const appointment = new Appointment({
            doctorName,
            patientName,
            phone,
            date,
            slot
        })

        await appointment.save()

        res.status(201).json({
            msg: "Appointment Successful"
        })

    } catch (err) {
        console.log(err.message);

    }
}


const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()

        res.json({
            appointments
        })

    } catch (err) {
        console.log(err.message);

    }
}

module.exports = {
    makeAppointment,
    getAppointments
}