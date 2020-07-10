const Doctor = require('../model/doctorModel')

// add doctor info
const addDoctor = async (req, res) => {
    try {
        const { name, email, phone } = req.body

        if (!name || !email && !phone) {
            return res.json({
                msg: "Provide all information"
            })
        }

        const doctor = new Doctor({
            name,
            email,
            phone
        })

        await doctor.save()
        res.status(201).json({
            msg: "Doctor info added"
        })

    } catch (err) {
        console.log(err.messagr)
    }
}

// add slot

const addSlot = async (req, res) => {
    try {
        const { date, slot, id } = req.body
        const doctor = await Doctor.findById(id)

        // if doctor info not available
        if (!doctor) {
            return res.json({
                msg: "Please provide valid doctor id"
            })
        }
        console.log(date, slot)
        const isExistSlot = doctor.schedule.find(sch => sch.date === date.trim() && sch.slot === slot.trim())
        

        if (isExistSlot) {
            return res.json({
                msg: "Schedule already exist"
            })
        }

        const currentSchedule = doctor.schedule;


        const newSchedule = {
            date,
            slot
        }


        doctor.schedule = [...currentSchedule, newSchedule]

        await doctor.save()

        res.status(201).json({
            msg: "Slot Added"
        })
    } catch (err) {
        console.log(err.message);

    }
}

// get doctor info
const getDoctorInfo = async (req, res) => {
    try {
        const doctor = await Doctor.find()
        res.json({
            doctor
        })
    } catch (err) {
        console.log(err.messagr)
    }
}

module.exports = {
    addDoctor,
    getDoctorInfo,
    addSlot
}