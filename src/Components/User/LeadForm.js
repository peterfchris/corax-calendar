import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class LeadForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>Request a Consultation</h1>
                    <input
                    placeholder='first name'
                     />
                    <input
                    placeholder='last name' />
                    <input
                    placeholder='email' />
                    <input
                    placeholder='phone number' />
                    <button><Link to='/scheduler'>Schedule Consultation</Link></button>
                </form>
            </div>
        )
    }
}

export default LeadForm
