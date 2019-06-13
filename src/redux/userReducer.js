const initialState = {
    potential_first: '',
    potential_last: '',
    potential_email: '',
    potential_phone: '',
    potential_id: null
}

const ADD_USER = 'ADD_USER'

export function addUser(user){
    return{
        type: ADD_USER,
        payload: user
    }
}
 
function userReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            const {potential_first, potential_last, potential_email, potential_phone, potential_id} = action.payload
            return  {potential_first, potential_last, potential_email, potential_phone, potential_id}
        default: 
            return state
    }
}

export default userReducer