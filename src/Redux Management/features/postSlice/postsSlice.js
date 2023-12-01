import { createSlice } from "@reduxjs/toolkit";
import { addNewPost, fetchPosts } from "./postsServices";
import {  addLikedPosts, removeLikedPosts } from "../postSlice/postsServices";



const initialState = {
    posts: [],
    likedPosts: JSON.parse(localStorage.getItem("likedPosts")) ?? [] ,
    status: "initial",
    error: null
}

export const postsSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = "pending"
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = "success"
            state.posts = action.payload.posts
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = "error"
            state.error = "error..."
        },

        [addLikedPosts.pending]: (state) => {
            state.status = "pending";
        },
        [addLikedPosts.fulfilled]: (state, action) => {
            const allLikedosts = action.payload.filter((item)=>item.likes.likedBy.find((post)=>post.username === userData.username))
            state.likedPosts = action.payload
            localStorage.setItem("likedPosts", JSON.stringify(allLikedosts) )

        },
        [addLikedPosts.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [removeLikedPosts.pending]: (state) => {
            state.status = "pending";
        },
        [removeLikedPosts.fulfilled]: (state, action) => {
            const allLikedosts = action.payload.filter((item)=>item.likes.likedBy.find((post)=>post.username === userData.username))
            state.likedPosts = allLikedosts;

        },
        [removeLikedPosts.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [addNewPost.pending]: (state) => {
            state.status = "pending";
        },
        [addNewPost.fulfilled]: (state, action) => {
        
            state.likedPosts = action.payload.posts;

        },
        [addNewPost.rejected]: (state, action) => {
            state.error = action.payload;
        },

    }

})
