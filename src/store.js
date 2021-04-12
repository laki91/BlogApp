import {combineReducers, createStore} from 'redux'
import { userReducer } from './Login/store/reducer'

const store = combineReducers ({
    userStore: userReducer
})


export default createStore(store)