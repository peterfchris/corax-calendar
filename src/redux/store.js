import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))