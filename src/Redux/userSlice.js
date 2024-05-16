import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    },
    reducers:{
        setLogin:(state,action)=>{
            state.isLoggedIn=true
        },
        setLogout:(state,action)=>{
            state.isLoggedIn=false
        }
    }
});

export const {setLogin, setLogout}=userSlice?.actions;

export default userSlice.reducer;