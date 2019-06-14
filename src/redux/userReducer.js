const initialState = {
    potential_first: '',
    potential_last: '',
    potential_email: '',
    potential_phone: '',
    potential_id: null,
    startDate: '',
    startTime: ''
}

const ADD_USER = 'ADD_USER'
const ADD_CONSULTATION = 'ADD_CONSULTATION'

export function addUser(user){
    return{
        type: ADD_USER,
        payload: user
    }
}

export function addConsultation(consultation){
    return{
        type: ADD_CONSULTATION,
        payload: consultation
    }
}
 
function userReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            const {potential_first, potential_last, potential_email, potential_phone, potential_id} = action.payload
            return  {...state, potential_first, potential_last, potential_email, potential_phone, potential_id}
        case ADD_CONSULTATION:
            const {startDate, startTime} = action.payload
            return {...state, startDate, startTime}
        default: 
            return state
    }
}

export default userReducer