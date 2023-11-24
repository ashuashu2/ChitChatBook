import { createSlice } from "@reduxjs/toolkit";
import {  editUserProfile, followUser, loginHandler, signupHandler } from "./AuthServices";
import ashu from "../../../images/ashu.jpg"





const initialState={
    userData:JSON.parse(localStorage.getItem("authUser")) ?? {},
    login:JSON.parse(localStorage.getItem("authUser")) ? true : false,
    token:localStorage.getItem("token") ?? "",
    likedPosts:[],
    status:"",
    error:null

}

 export const authSlice = createSlice({
    
name:"authSlice",
initialState,
reducers:{
    logoutUser: (state) => {
        localStorage.removeItem("token");
        localStorage.removeItem("authUser");
        state.token = null;
        state.userData = {};
        state.status = "idle";
        state.error = null;
        state.login = false;
      },

      loginAsGuest: (state) => {
        state.userData = {
            _id: "o5gzWjEeX_",
            firstName: "Ashu",
            lastName: "Birthare",
            followers:[],
            following:[],
            username: "ashubirthare",
            password: "ashubirthare123",
            bio: "Aspiring Frontend Engineer",
            bookmarks: [],
            avatarUrl:ashu,
            website: "https://ashutoshportfolios.netlify.app/",
            createdAt: "2022-01-04T10:55:06+05:30",
          };
        state.status = "login success";
        state.error = null;
        state.login = true;
        state.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MGI0YjI3Zi0wZTY4LTRmMWEtOTU3Yy1lYTM5ZWU5NzdkZjgiLCJ1c2VybmFtZSI6ImFzaHViaXJ0aGFyZSJ9.GS1XPDAy-01_BsqnhVK8zfXOLLZiyuOHztOyU71IM5w";

        localStorage.setItem("authUser", JSON.stringify(state.userData));
      localStorage.setItem("token", state.token);

      },
},
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
        localStorage.setItem("token", state.token);
      localStorage.setItem("authUser", JSON.stringify(state.userData));
    },
    [loginHandler.rejected]:(state)=>{
        state.status = "error"
        state.error = "error"
    
    },


    [editUserProfile.pending]: (state, action) => {
        state.status = "pending";
      },
      [editUserProfile.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.userData = action.payload;
      },
      [editUserProfile.rejected]: (state, action) => {
        state.error = action.payload;
      },


}
})
export const {logoutUser ,loginAsGuest } = authSlice.actions 