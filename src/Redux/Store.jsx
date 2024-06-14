import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './CounterSlice.jsx'


export default configureStore({
    reducer:{
        counter: counterReducer
    }
})