const initialState = { events: []}

const ALL_EVENTS = 'ALL_EVENTS'

export function allEvents(events){
    return {
        type: ALL_EVENTS,
        payload: events
    }
}

function calendarReducer(state = initialState, action){
    switch(action.type){
        case ALL_EVENTS:
            return {...state, events: action.payload}
        default: 
            return state
    }
}

export default calendarReducer