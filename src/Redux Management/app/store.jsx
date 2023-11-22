import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "../features/postSlice/postsSlice";
import { usersSlice } from "../features/userSlice/userSlice";
import { authSlice } from "../features/authSlice/AuthSlice";


export default configureStore({
    reducer:{
        userSlice:usersSlice.reducer,
        postsSlice:postsSlice.reducer,
        authSlice:authSlice.reducer
    }
});