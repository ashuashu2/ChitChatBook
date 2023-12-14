import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



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
    "authSlice/editUserProfile",
    async ({ userDetails, token }, { rejectWithValue }) => {
        console.log(userDetails)

        try {
            const resp = await axios.post("/api/users/edit",{ userDetails }, { headers: { authorization: token }});
            console.log(resp)
            return resp.data.user;
        } catch (error) {
            console.error(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);





export const addBookMarkPosts = createAsyncThunk(
    "authSlice/addBookMarkPosts",
    async ({ postID, token }, { rejectWithValue }) => {

        try {
            const resp = await axios.post(
                `/api/users/bookmark/${postID}`,
                {},
                {
                    headers: { authorization: token },
                }
            );
            toast.success("post succesfully added in bookmark")

            return resp.data.bookmarks;
        } catch (error) {
            console.error(error.response.data);
            toast.error("something is not right please try again")
            return rejectWithValue(error.response.data);
        }
    }
);


export const removeBookMarkPosts = createAsyncThunk(
    "authSlice/removeBookMarkPosts",
    async ({ postID, token }, { rejectWithValue }) => {

        try {
            const resp = await axios.post(
                `/api/users/remove-bookmark/${postID}`,
                {},
                {
                    headers: { authorization: token },
                }
            );
            toast.success("post succesfully removed from bookmark")


            return resp.data.bookmarks;
        } catch (error) {
            console.error(error.response.data);
            toast.error("something is not right please try again")

            return rejectWithValue(error.response.data);
        }
    }
);