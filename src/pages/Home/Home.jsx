import { useDispatch, useSelector } from "react-redux"
import { v4 as uuid } from 'uuid';
import { useEffect } from "react"
import avatarimage from "../../images/avatarimage.jpg"
import { FaImage } from "react-icons/fa6";
import "./Home.css"
import { ArrowButtonHeader } from "../../components/ArrowButtonHeader/ArrowButtonHeader";
import { useState } from "react";
import { PostComponent } from "../../components/PostComponent/PostComponent";
import { addNewPost, fetchPosts } from "../../Redux Management/features/postSlice/postsServices";
import { formatDate } from "../../backend/utils/authUtils";

function Home() {
    const { posts } = useSelector((state) => state.postsSlice)
    const { userData, token } = useSelector((state) => state.authSlice)
    const { users } = useSelector((state) => state.userSlice)
    const [statusInput, setStatusInput] = useState("")
    const [postData, setPostsData] = useState()
    const [postImageData, setPostsIamgeData] = useState([])
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(fetchPosts())

    },[postImageData])



    function postInputHandler(e) {
        const newPostData = {
            _id: uuid(),
            content: statusInput,
            mediaURL: URL.createObjectURL(e.target.files[0]),
            likes: {
                likeCount: 0,
                likedBy: [],
                dislikedBy: [],
            },
            comments: [],
            username: userData.username,
            createdAt: formatDate(),
            updatedAt: formatDate(),

        }
       
        setPostsData(newPostData)
    }


    async function postUploadHandler() {

        setPostsIamgeData([...postImageData, postData]);
        dispatch(addNewPost({newPostData : postData,token}));
         setPostsData();
        setStatusInput("");
       

    }
 





    return (
        <div>
            <div> <ArrowButtonHeader pathname="Home" /> </div>

            <div className="homepage-main-div" >
                <div className="homepage-newpost-main-div">
                    <div className="homepage-newpost-input-div">
                        <img className="homepage-profile-image" src={userData.avatarUrl ? userData.avatarUrl : avatarimage} alt="" />
                        <textarea onChange={(e) => setStatusInput(e.target.value)} className="homepage-status-input" name="" placeholder="Whats happening?"  ></textarea>
                    </div>
                    <hr className="homepage-hr" />

                    <div className="homepage-newpost-button-div">
                        <div className="homepage-galley-button-div">
                            <label for="files" class="gallery-input-button"> <FaImage /> </label>
                            <input onChange={postInputHandler} id="files" style={{ visibility: "hidden" }} type="file" />
                            <p className={postData && "postimage-name"}> {postData && postData.mediaURL.name} </p>



                        </div>
                        <div className="homepage-post-button-div">
                            <button className="homepage-post-button" onClick={postUploadHandler}>Post</button>
                        </div>

                    </div>


                </div>

                <div className="new-posts-images-div">
                    {posts.map((post) => post.username === userData.username &&
                        <PostComponent posts={post} />
                    )}
                </div>
                
                <div className="new-posts-images-div">
                    {  userData.following.map((user)=>posts.map((post) => post.username === user.username &&   
                        <PostComponent posts={post} />
                    ))}
                </div>



            </div>
        </div>
    )
}
export { Home }