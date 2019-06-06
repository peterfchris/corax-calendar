import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Confirmation extends Component {
    render() {
        return (
            <div>
                <h3>We look forward to meeting you</h3>
                <button><Link to='/'>Back to site</Link></button>
            </div>
        )
    }
}

export default Confirmation
