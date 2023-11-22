import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupHandler = createAsyncThunk("authSlice/signupHandler", async(data)=>{
    try {
        const response = await axios.post("/api/auth/signup",data) 
        localStorage.setItem("token", response.data.encodedToken);
        return response
    } catch (error) {
        return error
        
    }
})

export const loginHandler = createAsyncThunk("authSlice/loginHandler", async(data)=>{
    try {
        const response = await axios.post("/api/auth/login",data)      
        return response
    } catch (error) {
        return error
        
    }
})