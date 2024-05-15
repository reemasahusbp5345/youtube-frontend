import videoSlice from "./videoSlice";
import {configureStore} from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        videos:videoSlice
    }
});

export default store;