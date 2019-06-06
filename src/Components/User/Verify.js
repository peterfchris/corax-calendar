import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Verify extends Component {
    render() {
        return (
            <div>
                <h1>Is this correct?</h1>
                <h3>Appointment Info</h3>
                <button><Link to='/confirmation'>Yes</Link></button>
                <button>No</button>
                <br/>
                <input
                type='checkbox' />
                <p>I would like my consultation to be over the phone (we will call you!)</p>
                <input
                type='checkbox' />
                <p>I would like you to email me a reminder</p>
                <input
                type='checkbox' />
                <p>I would like you to text me a reminder</p>
            </div>
        )
    }
}

export default Verify
