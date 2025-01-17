import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Admin Components

import Login from './Components/Admin/Login'
import Register from './Components/Admin/Register'
import CalendarView from './Components/Admin/CalendarView'
import CreateEvent from './Components/Admin/CreateEvent'
import CreateHearing from './Components/Admin/CreateHearing'

// User Components

import Home from './Components/User/Home'
import LeadForm from './Components/User/LeadForm'
import Scheduler from './Components/User/Scheduler'
import Confirmation from './Components/User/Confirmation'

export default (
    <Switch>
        {/* User Routes */}
        <Route exact path='/' component={Home} />
        <Route path='/lead-form' component={LeadForm} />
        <Route path='/scheduler' component={Scheduler} />
        <Route path='/confirmation' component={Confirmation} />
        {/* Admin Routes */}
        <Route path='/login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/calendar' component={CalendarView} />
        <Route path='/new-hearing' component={CreateHearing} />
        <Route path='/new-event' component={CreateEvent} />
    </Switch>
)