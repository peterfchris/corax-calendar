const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    username: ''
}

const UPDATE_ADMIN = 'UPDATE_ADMIN'
const CLEAR_ADMIN = 'CLEAR_ADMIN'


export function updateAdmin(admin){
    return {
        type: UPDATE_ADMIN,
        payload: admin
    }
}

export function clearAdmin(){
    return {
        type: CLEAR_ADMIN
    }
}



function adminReducer(state = initialState, action){
    switch(action.type){
        case UPDATE_ADMIN:
            const {firstname, lastname, email, username} = action.payload
            return {...state, firstname, lastname, email, username}
        case CLEAR_ADMIN:
            return {...initialState}
        default:
            return state
    }
}

export default adminReducer