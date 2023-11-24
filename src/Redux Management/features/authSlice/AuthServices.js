import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const signupHandler = createAsyncThunk("authSlice/signupHandler", async (data) => {
    try {
        const response = await axios.post("/api/auth/signup", data)
        localStorage.setItem("token", response.data.encodedToken);
        return response
    } catch (error) {
        return error

    }
})

export const loginHandler = createAsyncThunk("authSlice/loginHandler", async (data) => {
    try {
        const response = await axios.post("/api/auth/login", data)

        return response
    } catch (error) {
        return error

    }
})





export const editUserProfile = createAsyncThunk(
    "authenticate/editUserProfile",
    async ({ userDetails, token }, { rejectWithValue }) => {
        try {
            const resp = await axios.post("/api/users/edit",{ userDetails },{ headers: { authorization  : token},});
            console.log(resp)
            return resp.data.user;
        } catch (error) {
            console.error(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);