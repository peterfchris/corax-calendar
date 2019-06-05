const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
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
            const {firstname, lastname, email, phone} = action.payload
            return  {firstname, lastname, email, phone}
        default: 
            return state
    }
}

export default userReducer