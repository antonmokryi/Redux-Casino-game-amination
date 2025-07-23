import {configureStore} from "@reduxjs/toolkit";
import {casinoReducer} from "./tasks/reducer.js";

export const store = configureStore({
    reducer: {
        casino: casinoReducer
    }
})