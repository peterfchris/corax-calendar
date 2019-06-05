import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Admin Components

import Login from './Components/Admin/Login'
import Register from './Components/Admin/Register'
import CalendarView from './Components/Admin/CalendarView'
import CreateEvent from './Components/Admin/CreateEvent'

// User Components

import Home from './Components/User/Home'
import LeadForm from './Components/User/LeadForm'
import UserCalendar from './Components/User/UserCalendar'
import Confirmation from './Components/User/Confirmation'

export default (
    <Switch>
        {/* User Routes */}
        <Route exact path='/' component={Home} />
        <Route path='/lead-form' component={LeadForm} />
        <Route path='/scheduler' component={UserCalendar} />
        <Route path='/confirmation' component={Confirmation} />
        {/* Admin Routes */}
        <Route path='/login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/calendar' component={CalendarView} />
        <Route path='/new-event' component={CreateEvent} />
    </Switch>
)