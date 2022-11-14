import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./aurthmaticsOperaction"
   

const store =configureStore({
    reducer:{
    counter: counterReducer
    }
})

export default store