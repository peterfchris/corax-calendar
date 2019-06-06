import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    calendar: calendarReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))