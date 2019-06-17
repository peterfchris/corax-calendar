require('dotenv').config()
const express = require('express'),
        session = require('express-session'),
        massive = require('massive'),
        authCtrl = require('./controllers/authCtrl'),
        potentialCtrl = require('./controllers/potentialCtrl'),
        calendarCtrl = require('./controllers/calendarCtrl'),
        twilio = require('./twilio')
const app = express()
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
)

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set!', database.listTables())
    app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT} is alive and well`))
})

// Admin Endpoints

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/admin', authCtrl.getAdmin)
app.get('/auth/logout', authCtrl.logout)

// Calendar Endpoints

app.post('/api/create-event', calendarCtrl.createEvent)
app.post('/api/create-hearing', calendarCtrl.createHearing)
app.get('/api/get-event/:id', calendarCtrl.getEvent)
app.get('/api/getEvents', calendarCtrl.getAllEvents)
app.put('/api/update-event/:id', calendarCtrl.updateEvent)
app.delete('/api/delete/:id', calendarCtrl.deleteEvent)

// Potential Client Endpoints

app.post('/api/client-info', potentialCtrl.createClient)
app.post('/api/create-consultation', potentialCtrl.createConsultation)

// Twilio Endpoint

app.post('/api/confirmation', twilio.confirmation)