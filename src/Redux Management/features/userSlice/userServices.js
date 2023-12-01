import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { editUserProfile } from "../authSlice/AuthServices";
import { toast } from "react-toastify";

export const fetchUsers = createAsyncThunk("userSlice/fetchUsers", async () => {

    const response = await axios.get("/api/users")
    return response.data


})
export const followUser = createAsyncThunk(
    "/userSlice/followUser",
    async ({ followUserId, token, dispatch ,userData}) => {
        

        try {
            const response = await axios.post(`/api/users/follow/${followUserId}`, {},
                { headers: { authorization: token } }
            );
            toast.success(`follow  ${userData.firstName} succesfully`)
            dispatch(editUserProfile({ userDetails: response.data.user, token }));

            return response.data;
        } catch (error) {
            console.log(error)
            toast.error(`something is not right please try again`)

            console.error(error.response.data);
        }
    }
);

export const unFollowUser = createAsyncThunk(
    "/userSlice/unFollowUser",
    async ({ followUserId, token, dispatch ,userData}) => {

        try {
            const response = await axios.post(`/api/users/unfollow/${followUserId}`, {},
                { headers: { authorization: token } }
            );
            toast.success(`unfollow ${userData.firstName} succesfully`)

            dispatch(editUserProfile({ userDetails: response.data.user, token }));

            return response.data;
        } catch (error) {
            console.log(error)
            toast.error(`something is not right please try again`)

            console.error(error.response.data);
        }
    }
);