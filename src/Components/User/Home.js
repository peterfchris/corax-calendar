import React, { Component } from 'react'
import './Home.css'

import {
    HomePage,
    HomeContainer,
    HomeHeader,
    LoremStuff,
    ScheduleBtn
} from './HomeStyles'

export class Home extends Component {

    handleClick = () => {
        this.props.history.push('/lead-form')
    }

    render() {
        return (
            <div>
                <HomePage>
                    <HomeContainer>
                        <HomeHeader>Corax Calendar</HomeHeader>
                        <LoremStuff> Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.</LoremStuff>
                        <LoremStuff>Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.</LoremStuff>
                        <ScheduleBtn onClick={this.handleClick}>
                            Schedule a Free Consultation
                        </ScheduleBtn>
                    </HomeContainer>
                </HomePage>
            </div>
        )
    }
}

export default Home
