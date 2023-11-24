import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("userSlice/fetchUsers",async()=>{

       const response = await axios.get("/api/users")
       return response.data
       
   
})
export const followUser = createAsyncThunk(
       "/users/followUser",
       async ({ followUserId, token ,dispatch}) => {
           try {
               const response = await axios.post(`/api/users/follow/${followUserId}`, {}, { headers: { authorization :token} }
               );
               dispatch(editUserProfile({ userDetails: response.data.user, token }));
   
               return response.data;
           } catch (error) {
               console.error(error.response.data);
           }
       }
   );