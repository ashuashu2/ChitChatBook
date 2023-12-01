import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchPosts = createAsyncThunk("postSlice/fetchPosts", async () => {

       const response = await axios.get("/api/posts")
       return response.data


})





export const addLikedPosts = createAsyncThunk(
       "postsSlice/addLikedPosts",
       async ({ postID, token }, { rejectWithValue }) => {

              try {
                     const resp = await axios.post(
                            `/api/posts/like/${postID}`,
                            {},
                            {
                                   headers: { authorization: token },
                            }
                     );

                     toast.success("post successfully added in likes")


                     return resp.data.posts;
              } catch (error) {
                     console.error(error.response.data);
                     toast.error("something is not right please try again")

                     return rejectWithValue(error.response.data);

              }
       }
);


export const removeLikedPosts = createAsyncThunk(
       "postsSlice/removeLikedPosts",
       async ({ postID, token }, { rejectWithValue }) => {

              try {
                     const resp = await axios.post(
                            `/api/posts/dislike/${postID}`,
                            {},
                            {
                                   headers: { authorization: token },
                            }
                     );
                     toast.success("post successfully removed from likes")
                     return resp.data.posts;
              } catch (error) {
                     console.error(error.response.data);
                     toast.error("something is not right please try again")

                     return rejectWithValue(error.response.data);
              }
       }
);


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