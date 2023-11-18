import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts=createAsyncThunk("postSlice/fetchPosts",async()=>{

       const response = await axios.get("/api/posts")
       return response.data
       
   
})