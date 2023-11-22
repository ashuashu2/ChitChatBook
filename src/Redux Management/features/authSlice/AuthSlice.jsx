import { createSlice } from "@reduxjs/toolkit";
import { loginHandler, signupHandler } from "./AuthServices";





const initialState={
    userData:{},
    login:false,
    token:"",
    likedPosts:[],
    status:"",
    error:null

}

 export const authSlice = createSlice({
name:"authSlice",
initialState,
reducers:{},
extraReducers:{
    [signupHandler.pending]:(state)=>{
        state.status = "pending"
    },
    [signupHandler.fulfilled]:(state,action)=>{

        state.status = "signup success"
        localStorage.setItem("token", action.payload.data.encodedToken)
       
    },
    [signupHandler.rejected]:(state)=>{
        state.status = "error"
        state.error = "error"
    
    },
    [loginHandler.pending]:(state)=>{
        state.status = "pending"
    },
    [loginHandler.fulfilled]:(state,action)=>{
        state.status = "login success"
        state.userData = action.payload.data.foundUser
        state.login = true
        state.token = action.payload.data.encodedToken
    },
    [loginHandler.rejected]:(state)=>{
        state.status = "error"
        state.error = "error"
    
    },


}
})