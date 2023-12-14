import { createSlice } from "@reduxjs/toolkit";
import { addNewPost, deletePost, editPostData, fetchPosts } from "./postsServices";
import { addLikedPosts, removeLikedPosts } from "../postSlice/postsServices";



const initialState = {
    posts: [],
    likedPosts: [],
    status: "initial",
    error: null,
    sortingStatus : "idle",
}

export const postsSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        addCommentHandler: (state, action) => {
            const postId = action.payload.postId
            const newCommentData = action.payload.commentData
            const newPostsData = state.posts.map((post) => post._id === postId ? { ...post, comments: [...post.comments, newCommentData] } : post)
            state.posts = newPostsData
        },
        deleteCommentHandler: (state, action) => {
            const postId = action.payload.postId
            const commentId = action.payload.commentId
            const newPostsData = state.posts.map((post) => post._id === postId ? { ...post, comments: post.comments.filter((c) => c._id !== commentId) } : post)
            console.log(newPostsData)
            state.posts = newPostsData
        },
        changeSortingOfPosts: (state, action) => {
             state.sortingStatus = action.payload ;

            if(state.sortingStatus === "trending"){
                state.posts.sort((a,b)=>b.likes.likeCount - a.likes.likeCount)
            }else{
                if (state.sortingStatus === "latest") {
                state.posts.sort((a,b)=>new Date(b.createdAt) -  new Date(a.createdAt) )

                    
                }
            }
        }
    },
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
            state.likedPosts = action.payload

        },
        [addLikedPosts.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [removeLikedPosts.pending]: (state) => {
            state.status = "pending";
        },
        [removeLikedPosts.fulfilled]: (state, action) => {
            const allLikedosts = action.payload.filter((item) => item.likes.likedBy.find((post) => post.username === userData.username))
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
        [deletePost.pending]: (state) => {
            state.status = "pending";
        },
        [deletePost.fulfilled]: (state, action) => {

            state.posts = action.payload.posts;

        },
        [deletePost.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [editPostData.pending]: (state) => {
            state.status = "pending";
        },
        [editPostData.fulfilled]: (state, action) => {

            state.posts = action.payload.posts;

        },
        [editPostData.rejected]: (state, action) => {
            state.error = action.payload;
        },


    }

})
export const { addCommentHandler } = postsSlice.actions
export const { deleteCommentHandler } = postsSlice.actions
export const { changeSortingOfPosts } = postsSlice.actions



