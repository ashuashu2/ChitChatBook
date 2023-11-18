import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("userSlice/fetchUsers",async()=>{

       const response = await axios.get("/api/users")
       return response.data
       
   
})