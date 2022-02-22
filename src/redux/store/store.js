import {configureStore} from "@reduxjs/toolkit"
import { counterSlice } from "../slices/counterSlices";


const store = configureStore({
    reducer :{
        counter: counterSlice,
    },
});

export default store