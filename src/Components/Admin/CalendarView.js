import React, { Component } from 'react'
import FullCalendar from 'fullcalendar-reactwrapper'
import {Link} from 'react-router-dom'
import {allEvents} from '../../redux/calendarReducer'
import {connect} from 'react-redux'

import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"; 
import Axios from 'axios';

// JUNE 6 CHECKLIST

// button needs to link to create event page
// events should be able to be selected, updated, deleted 
// logout button that ends session and returns to login page

// JUNE 17 CHECKLIST

// style the log out button

export class CalendarView extends Component {
    constructor(){
        super()
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        this.handleEvents()
    }

    handleEvents = (e) => {
        Axios
        .get('/api/getEvents')
        .then(res => {
        console.log(res.data) 
        this.props.allEvents(res.data)
    })

    }

    render() {
        const createEvent = {
            createEvent: {
              text: "Create Event",
              click: function() {
                
              },
              style: "height: 300px"
            }
          };
        return (
            <div>
                <h1>Calendar View</h1>
                <button><Link to='/login'>log out</Link></button>
                <FullCalendar 
                    id="user-calendar"
                    customButtons={createEvent}
                    header = {{
                        left: 'prev,next today createEvent',
                        center: 'title',
                        right: 'month,basicWeek,basicDay'
                    }}
                    navLinks= {true} 
                    editable= {true}
                    events = {this.props.calendar}
                />
            </div>
        )
    }
}

function mapStateToProps(reduxState){
	return reduxState
}

export default connect(mapStateToProps, {allEvents})(CalendarView) 
