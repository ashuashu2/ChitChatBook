import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchPosts = createAsyncThunk("postSlice/fetchPosts", async () => {

       const response = await axios.get("/api/posts")
       return response.data


})



export const addNewPost = createAsyncThunk("postsSlice/addNewPost", async ({ newPostData, token }) => {
       try {
              const response = await axios.post("/api/posts", { postData: newPostData }, { headers: { authorization: token } });
              toast.success("post added successfully")
              return response.data
       } catch (error) {
              toast.error("something is not right please try again")
              console.log(error)

       }

})

export const deletePost = createAsyncThunk("postsSlice/deletePost", async ({ postId, token }) => {


       try {
              const response = await axios.delete(`/api/posts/${postId}`, { headers: { authorization: token } });
              toast.success("post deleted successfully")

              return response.data
       } catch (error) {
              toast.error("something is not right please try again")
              console.log(error)

       }

})


export const editPostData = createAsyncThunk("postsSlice/editPostData", async ({ postId, postData, token }) => {


       try {
              const response = await axios.post(`/api/posts/edit/${postId}`, { postData }, { headers: { authorization: token } });
              toast.success("post update successfully")
              return response.data
       } catch (error) {
              toast.error("something is not right please try again")
              console.log(error)

       }

})

