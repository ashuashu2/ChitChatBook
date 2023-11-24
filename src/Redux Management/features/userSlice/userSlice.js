import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, followUser } from "./userServices";



const initialState = {
    users:  [],
    status: "initial",
    error: null
}

export const usersSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = "pending"
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = "success"
            state.users = action.payload.users
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = "error"
            state.error = "error... "
        },


        [followUser.pending]: (state) => {
            state.status = "pending"
        },
        [followUser.fulfilled]: (state, action) => {

            state.users = state.users.map((currUser) =>
                currUser._id === action.payload.followUser._id
                    ? action.payload.followUser
                    : currUser
            );

        },
        [followUser.rejected]: (state, action) => {
            state.status = "error"
            console.log(action)
            state.error = "error"

        },

    }

})
