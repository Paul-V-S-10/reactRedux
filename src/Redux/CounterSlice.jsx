import {createSlice} from '@reduxjs/toolkit'



export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false
    },
    reducers: {
        change : state => {state.value=!(state.value)}
    }
})

export const {change} = CounterSlice.actions
console.log(CounterSlice.actions);
export default CounterSlice.reducer