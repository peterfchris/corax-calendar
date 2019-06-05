import React, { Component } from 'react'
import FullCalendar from 'fullcalendar-reactwrapper'
import {Link} from 'react-router-dom'
import Verify from './Verify'

import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"; 

export class UserCalendar extends Component {
    constructor(){
        super()
        this.state = {
            events: []
        }
    }
    render() {
        return (
            <div>
                <h1><Link to='/confirmation'>User Calendar</Link></h1>
                <FullCalendar 
                    id="user-calendar"
                    header = {{
                        left: 'prev,next today myCustomButton',
                        center: 'title',
                        right: 'month,basicWeek,basicDay'
                    }}
                    navLinks= {true} 
                    editable= {true}
                    events = {this.state.events}
                />
                <Verify />
            </div>
        )
    }
}

export default UserCalendar
