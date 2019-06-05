import React, { Component } from 'react'
import FullCalendar from 'fullcalendar-reactwrapper'
import {Link} from 'react-router-dom'

import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"; 

export class CalendarView extends Component {
    constructor(){
        super()
        this.state = {
            events: []
        }
    }
    render() {
        return (
            <div>
                <h1>Calendar View</h1>
                <button><Link to='/new-event'>Create Event</Link></button>
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
            </div>
        )
    }
}

export default CalendarView
