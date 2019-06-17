import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser, addConsultation} from '../../redux/userReducer'
import './Confirmation.css'
import Axios from 'axios';


export class Confirmation extends Component {
    constructor(){
        super()

        this.state = {
            firstname: '',
            lastname: '',
            startDate: '',
            startTime: '',
            phone: null
        }
    }

    componentDidMount = () => {
        this.handleDateFormat()
        this.handleTimeFormat()
        this.handleSMS()
    }

    handleSMS = () => {
        console.log(`+1${this.props.user.potential_phone}`)
        Axios.post('/api/confirmation', {
            potential_phone: `+1${this.props.user.potential_phone}`
        })
        .then(() => console.log('msg sent'))
    }

    handleDateFormat = () => {
        var year = 0
        var month = 0
        var day = 0
        var splitDate = this.props.user.startDate.split('-')
        console.log('splitDate', splitDate)
        year = +splitDate[0]
        month = +splitDate[1]
        day = +splitDate[2]
        splitDate = new Date(year, month, day)
        console.log('splitDate', splitDate)
        this.setState({
            startDate: splitDate.toDateString()
        })
    }

    handleTimeFormat = () => {
        console.log('this.props.user.startTime', this.props.user.startTime)
        var startTimeArray = this.props.user.startTime.split(':')
        var HH = parseInt(startTimeArray[0])
        var min = startTimeArray[1]
        var AMPM = HH >= 12 ? "PM" : "AM";
        var hours;
        if(HH === 0){
            hours = HH + 12;
        } else if (HH > 12) {
            hours = HH - 12;
        } else {
            hours = HH;
        }
        var newFormatTime = hours + ":" + min + " " + AMPM;
        this.setState({
            startTime: newFormatTime
        })
    }

    handleClick = () => {
        this.props.history.push('/')
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <div className='confirmation-page'>
                    <div className='confirmation-container'>
                        <h3 className='confirmation-header'>We look forward to meeting you!</h3>
                        <p className='p'>You're all set!</p>
                        <p className='p'>{this.props.user.potential_first} {this.props.user.potential_last}</p>
                        <p className='p'>{this.state.startDate}</p>
                        <p className='p'>at {this.state.startTime}</p>
                        <button className='confirmation-btn' onClick={this.handleClick} >Back to site</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default withRouter(connect(mapStateToProps, {addUser, addConsultation})(Confirmation))
