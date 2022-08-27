// import { legacy_createStore } from "redux";

// const reducerFn = (state = { counter : 0 }, action ) => {

//     // Limitation of Redux - Synchronous Function & We should not mutate the original state

//     if (action.type === "INC") {
//         return {counter:state.counter + 1 }
//     }

//     if (action.type === "DEC") {
//         return {counter:state.counter - 1 }
//     }

//     if (action.type === "ADD") {
//         return {counter:state.counter + action.payload }
//     }


//          return state;
// };

// const store = legacy_createStore(reducerFn);

// export default store;

// Counter app using Redux-Toolkit /////

import { configureStore,  createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'counter',
    initialState : {counter: 0},
    reducers : {
        increment(state, action) {
            state.counter ++ ; 
         },
        decrement(state, action) {
            state.counter===0? alert("Cannot decrement more"):state.counter--
            
         },
        addBy(state, action) {
            state.counter += action.payload;
        },

        reset(state, action) {
            state.counter = 0;
         }

    }

})

export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;