import { useDispatch, useSelector } from "react-redux";
import "./EditPostsComponent.css"
import { FaImage } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-toastify";
import { formatDate } from "../../backend/utils/authUtils";
import { editPostData } from "../../Redux Management/features/postSlice/postsServices";


function EditPostComponent({ PostsData, buttonHandler }) {
    const [postImageName, setPostImageName] = useState("")
    const [postImage, setPostImage] = useState()
    const [statusInput, setStatusInput] = useState(PostsData.content)
    const dispatch = useDispatch()

    const { userData, token } = useSelector((state) => state.authSlice)
    const { posts } = useSelector((state) => state.postsSlice)



    function postUpdateHandler(e) {
        setPostImageName(e.target.files[0].name)
        setPostImage(URL.createObjectURL(e.target.files[0]))

    }





    async function UpdatePostHandler(postId) {
        const postsData = posts.find((post) => post._id === postId)
        const updatedData = {
            content: statusInput.length >= 1 ? statusInput : postsData.content,
            mediaURL1: postImage,
            updatedAt: formatDate(),

        }
        try {
            dispatch(editPostData({ postId, postData: updatedData, token }))
                .then(() => buttonHandler(false))

        } catch (error) {
            console.log(error)
            toast.error("something is not right please try again")

        }

    }


    return (
        <div className="EditPost-main-div">
            <div className="EditPost-text-div">
                <h2 className="EditPost-text">Edit Post</h2>
                <button className="EditPost-x-button" onClick={() => buttonHandler(false)}>X</button>
            </div>
            <hr />
            <div className="EditPost-content-div">
                <img className="editpost-profile-image" src={userData.avatarUrl} alt="/" />
                <textarea  value={statusInput} onChange={(e) => setStatusInput(e.target.value)} className="editpost-content-text">{PostsData.content}</textarea>

            </div>
            <hr />
            <div className="EditPost-button-div">
                <label for="editpost-files" className="Faimage"> <FaImage /> </label>
                <input onChange={postUpdateHandler} id="editpost-files" style={{ visibility: "hidden" }} type="file" />
                <button className="EditPost-update-button" onClick={() => UpdatePostHandler(PostsData._id)}> Update </button>

            </div>
            <hr />
            <div className={postImageName.length >= 1 ? "postimage-name" : undefined}> {postImageName} </div>
        </div>
    )
}
export { EditPostComponent } 