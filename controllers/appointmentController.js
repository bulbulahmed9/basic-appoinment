const Appointment = require('../model/appointmentModel')

const makeAppointment = async (req, res) => {
    try {

        const { doctorName, patientName, phone, date, slot } = req.body

        if (!doctorName || !patientName || !phone || !date || !slot) {
            return res.json({
                msg: "Please provide all fields"
            })
        }

        const isExistAppointment = await Appointment.find({ doctorName, date: date.trim(), slot: slot.trim() })

        if (isExistAppointment) {
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

        res.status(302).json({
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