const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()


// connect DB
const connectDB = require('./config/db')
connectDB();


// init middleware
app.use(express.json({ extended: true }))
app.use(cors())
app.use(morgan('dev'))



// routes 
app.use('/', require('./routes/doctorRoute'))

// Serve static assets in production
/*
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
*/

// Error Handling Middleware
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        msg: error.message
    })
})

// Start the Server
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})