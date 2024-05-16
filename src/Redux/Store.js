import userSlice from "./userSlice";
import videoSlice from "./videoSlice";
import {configureStore} from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        videos:videoSlice,
        user:userSlice
    }
});

export default store;