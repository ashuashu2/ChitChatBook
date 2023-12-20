import { createSlice } from "@reduxjs/toolkit";
import { addNewPost, deletePost, editPostData, fetchPosts } from "./postsServices";
import { toast } from "react-toastify";



const initialState = {
    posts: [],
    likedPosts: [],
    status: "initial",
    error: null,
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
            state.posts = newPostsData
        },
        changeSortingOfPosts: (state, action) => {

            if(action.payload === "trending"){
                state.posts.sort((a,b)=>b.likes.likeCount - a.likes.likeCount)
            }else{
                if (action.payload === "latest") {
                state.posts.sort((a,b)=>new Date(b.createdAt) -  new Date(a.createdAt) )

                    
                }
            }
        },

        addLikedPost: (state,action)=>{
            const newPostData = action.payload;
            state.posts = state.posts.map((post)=> post._id === newPostData._id ? {...post ,likes : { ...post.likes , likeCount : post.likes.likeCount + 1} } : post) ; 
            state.likedPosts = [...state.likedPosts , newPostData];
            toast.success("post successfully added in liked")
        },
        removeLikedPost: (state,action)=>{
            const newPostData = action.payload;
            state.posts = state.posts.map((post)=> post._id === newPostData._id ? {...post ,likes : { ...post.likes , likeCount : post.likes.likeCount - 1} } : post) ; 
            state.likedPosts = state.likedPosts.filter((posts)=>posts._id !== newPostData._id);
            toast.success("post successfully removed from liked")

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
        [addNewPost.pending]: (state) => {
            state.status = "pending";
        },
        [addNewPost.fulfilled]: (state, action) => {

            state.posts = action.payload.posts;

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
export const { addLikedPost } = postsSlice.actions
export const { removeLikedPost } = postsSlice.actions





