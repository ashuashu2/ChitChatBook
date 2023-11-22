import {  createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsServices";



const initialState={
    posts:[],
    bookmark:[],
    likedPost:[],
    status:"initial",
    error:null
}

export const postsSlice = createSlice({
    name:"postSlice",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchPosts.pending]:(state)=>{
            state.status = "pending"
        },
        [fetchPosts.fulfilled]:(state,action)=>{
            state.status = "success"
            state.posts = action.payload.posts
        },
        [fetchPosts.rejected]:(state,action)=>{
            state.status = "error"
            state.error = "error..."
        },

    }

})
