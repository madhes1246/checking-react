import { createSlice } from "@reduxjs/toolkit";

export const aurthmaticsOperaction = createSlice ({

    name: "aurthmatices",
    initialState: {
        value:0,
        name:'madhes',
    },
    reducers:{
        increment: state=>{state.value +=1},
        decrement: state=>{state.value -=1},
        inctementByAmount: (state,action)=>{
            state.value +=action.payload
        }
    }
})

export const {increment,decrement,inctementByAmount}=aurthmaticsOperaction.actions;

export default aurthmaticsOperaction;