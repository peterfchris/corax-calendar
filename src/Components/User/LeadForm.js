import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class LeadForm extends Component {
    render() {
        return (
            <div>
                <h1><Link to='/scheduler'>LeadForm</Link></h1>
            </div>
        )
    }
}

export default LeadForm
