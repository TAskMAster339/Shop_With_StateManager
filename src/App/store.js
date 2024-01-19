import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./Reducers.js";

export const store = configureStore({
    reducer: {
        shop: shopReducer,
    }
});