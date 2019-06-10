import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateAdmin} from '../../redux/adminReducer'
import './Login.css'

export class Login extends Component {
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin = (e) => {
        e.preventDefault()
        axios
        .post('/auth/login', {admin_email: this.state.email, password: this.state.password})
        .then(res => this.props.updateAdmin(res.data))
    }

    handleLoginUpdate = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
    }

    handleRegister = () => {
        this.props.history.push('/register')
    }

    handleCalendarLogin = () => {
        this.props.history.push('/calendar')
    }

    render() {
        return (
            <div>
                <div className="login-container" > 
                    <div className="login-form">
                        <h1 className='login'>Login</h1>
                        <form className='login-form-1' onSubmit={this.handleLogin}>
                            <div className='input-fields'>
                                <input
                                    className='login-email'
                                    type='text'
                                    placeholder='email'
                                    name='email'
                                    onChange={this.handleLoginUpdate}
                                />
                                <br/>
                                <input
                                    className='login-password'
                                    type='password'
                                    placeholder='password'
                                    name='password'
                                    onChange={this.handleLoginUpdate}
                                />
                            </div>
                            <div className="login-btns">
                                <button 
                                    className='login-button' 
                                    onClick={this.handleCalendarLogin}>
                                        Login
                                </button>
                                <button 
                                    className='login-button' 
                                    onClick={this.handleRegister}>
                                        Register
                                </button>
                            </div>
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

export default  withRouter(connect(mapStateToProps, {updateAdmin})(Login))
