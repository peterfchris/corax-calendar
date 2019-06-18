import styled, {keyframes} from 'styled-components'

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dedede;
`

export const LoginFormContainer = styled.div`
    height: 30rem;
    width: 400px;
    background: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const LoginHeader = styled.div`
    position: absolute;
    margin-top: -180px;
    text-transform: uppercase;
    font-size: 3rem;
    color: #00334e;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
`

export const LoginInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const LoginBtnContainer = styled.div`
    display: flex;
    margin-top: 400px;
`

export const LoginButton = styled.div`
    -webkit-border-radius: 3;
    -moz-border-radius: 3;
    border-radius: 3px;
    font-family: Arial;
    color: #e8e8e8;
    font-size: 20px;
    background: #00334e;
    padding: 5px 10px 5px 10px;
    text-decoration: none;
    border: none;
    margin: -160px 100px 200px;
    &:hover {
        background: #5588a3;
        text-decoration: none;
    }
`
