import React, { Component } from 'react'
import './LeadForm.css'
import Axios from 'axios';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser} from '../../redux/userReducer'

export class LeadForm extends Component {
    constructor(){
        super()

        this.state={
            firstname: '',
            lastname: '',
            email: '',
            phone: null
        }
    }

    handleNewPotential = async (e) => {
        e.preventDefault()
        const {firstname, lastname, email, phone} = this.state
        await Axios
            .post('/api/client-info', {potential_first: firstname, potential_last: lastname, potential_email: email, potential_phone: phone})
            .then((res) => {
                console.log('res.data', res.data[0])
                this.props.addUser(res.data[0])
                this.props.history.push('/scheduler')
            })
            .catch(err => console.log('err', err))
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            phone: null
        })
    }

    handleInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className='lead-page'>
                    <div className='lead-container'>
                        <form onSubmit={this.handleNewPotential}>
                            <h1 className='lead-header'>Request a Consultation</h1>
                            <input
                            name='firstname'
                            onChange={this.handleInfoUpdate}
                            className='lead-input'
                            placeholder='first name'
                            type='text'
                            />
                            <input
                            name='lastname'
                            onChange={this.handleInfoUpdate}
                            className='lead-input'
                            placeholder='last name'
                            type='text' />
                            <input
                            name='email'
                            onChange={this.handleInfoUpdate}
                            className='lead-input'
                            placeholder='email'
                            type='email' />
                            <input
                            name='phone'
                            onChange={this.handleInfoUpdate}
                            className='lead-input'
                            placeholder='phone number'
                            type='number' />
                            <button className='lead-button'>Schedule Consultation</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default withRouter(connect(mapStateToProps, {addUser})(LeadForm)) 
