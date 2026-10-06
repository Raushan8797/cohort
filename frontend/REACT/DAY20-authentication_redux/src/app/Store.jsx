import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/CounterSlice"
import authReducer from '../feature/AuthSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer,
    },
})