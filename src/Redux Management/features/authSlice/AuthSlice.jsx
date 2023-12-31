import { createSlice } from "@reduxjs/toolkit";
import { addBookMarkPosts, editUserProfile, loginHandler, removeBookMarkPosts, signupHandler } from "./AuthServices";


const initialState = {
    userData: {},
    login: false,
    token: "",
    status: "",
    error: null,

}


export const authSlice = createSlice({

    name: "authSlice",
    initialState,
    reducers: {
        logoutUser : (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("authUser");
            state.token = null;
            state.userData = {};
            state.status = "idle";
            state.error = null;
            state.login = false;
            
        },

        updateUserDataHandler : (state,action)=>{
            state.userData = { ...state.userData , firstName : action.payload.firstName , lastName : action.payload.lastName ,  website : action.payload.website ,  bio : action.payload.bio , avatarUrl  : action.payload.avtarImage  };
        } 



    },
    extraReducers: {
        [signupHandler.pending]: (state) => {
            state.status = "pending"
        },
        [signupHandler.fulfilled]: (state, action) => {

            state.status = "signup success"
            localStorage.setItem("token", action.payload.data.encodedToken)

        },
        [signupHandler.rejected]: (state) => {
            state.status = "error"
            state.error = "error"

        },
        [loginHandler.pending]: (state) => {
            state.status = "pending"
        },
        [loginHandler.fulfilled]: (state, action) => {
            state.status = "login success"
            state.userData = action.payload.data.foundUser
            state.login = true
            state.token = action.payload.data.encodedToken
            localStorage.setItem("token", state.token);
            localStorage.setItem("authUser", JSON.stringify(state.userData));
        },
        [loginHandler.rejected]: (state) => {
            state.status = "error"
            state.error = "error"

        },

        [editUserProfile.pending]: (state) => {
            state.status = "pending";
        },
        [editUserProfile.fulfilled]: (state, action) => {    
            state.userData = action.payload;
        },
        [editUserProfile.rejected]: (state, action) => {
            state.error = action.payload;
        },
        
        [addBookMarkPosts.pending]: (state) => {
            state.status = "pending";
        },
        [addBookMarkPosts.fulfilled]: (state, action) => {
            state.userData.bookmarks = action.payload;
        },
        [addBookMarkPosts.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [removeBookMarkPosts.pending]: (state) => {
            state.status = "pending";
        },
        [removeBookMarkPosts.fulfilled]: (state, action) => {
            state.userData.bookmarks = action.payload;
        },
        [removeBookMarkPosts.rejected]: (state, action) => {
            state.error = action.payload;
        },


    }
});

export const { logoutUser  , updateUserDataHandler } = authSlice.actions 