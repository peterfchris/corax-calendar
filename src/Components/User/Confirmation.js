import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Confirmation extends Component {
    render() {
        return (
            <div>
                <h1><Link to='/'>Confirmation</Link></h1>
            </div>
        )
    }
}

export default Confirmation
