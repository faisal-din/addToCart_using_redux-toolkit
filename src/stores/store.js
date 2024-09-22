import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        //user: ...,
    },
    
});

export default store;