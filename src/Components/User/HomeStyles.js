import styled, {keyframes} from 'styled-components'

export const HomePage = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HomeContainer = styled.div`
    height: 30rem;
    width: 400px;
    background: #5588a3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3vh;
`

export const HomeHeader = styled.div`
    color: #00334e;
    text-transform: uppercase;
    font-size: 1.7rem;
    margin-top: -22vh;
`

export const LoremStuff = styled.p`
    color: #e8e8e8;
    margin: 3vh 0;
`

export const ScheduleBtn = styled.button`
    -webkit-border-radius: 3;
    -moz-border-radius: 3;
    border-radius: 3px;
    font-family: Arial;
    color: #00334e;
    font-size: 20px;
    background: #e8e8e8;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    border: none;
    text-transform: uppercase;
    position: absolute;
    margin: 25vh .4vh;
    &:hover {
        background: #00334e;
        color: #e8e8e8;
        text-decoration: none;
        cursor: pointer;
    }
`