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
                        <LoremStuff> Corax (Greek: Κόραξ, Korax; fl. 5th century BC) 
                            was one of the founders (along with Tisias) of ancient 
                            Greek rhetoric.</LoremStuff>
                        <LoremStuff>Corax is said to have lived in Sicily in the 5th 
                            century BC, when Thrasybulus, tyrant of Syracuse, was 
                            overthrown and a democracy formed.</LoremStuff>
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
