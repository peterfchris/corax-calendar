require('dotenv').config()
const express = require('express'),
        session = require('express-session'),
        massive = require('massive'),
        ctrl = require('./controllers/controller')
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

// Create
app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.post('/api/create-event', ctrl.createEvent)
// Read
app.get('/auth/admin', ctrl.getAdmin)
app.get('/auth/logout', ctrl.logout)
app.get('/api/get-event/:id', ctrl.getEvent)
// Update
app.put('/api/update-event/:id', ctrl.updateEvent)
// Destroy
app.delete('/api/delete/:event_id', ctrl.deleteEvent)

// Potential Client Endpoints
app.post('/api/client-info', ctrl.createClient)
app.post('/api/create-consultation', ctrl.createConsultation)
