import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../features/postSlice/userSlice/userSlice";
import { postsSlice } from "../features/postSlice/postsSlice";


export default configureStore({
    reducer:{
        userSlice:usersSlice.reducer,
        postsSlice:postsSlice.reducer
    }
});