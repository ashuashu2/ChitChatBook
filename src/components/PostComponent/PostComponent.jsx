import { Link, useLocation, useParams } from "react-router-dom";
import "./PostComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { BiMessageRounded } from "react-icons/bi";
import { IoIosBookmark } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuid } from 'uuid';
import { useEffect } from "react";
import { deletePost, fetchPosts } from "../../Redux Management/features/postSlice/postsServices";
import { addLikedPosts, removeLikedPosts } from "../../Redux Management/features/postSlice/postsServices";
import { addBookMarkPosts, removeBookMarkPosts } from "../../Redux Management/features/authSlice/AuthServices";
import { useState } from "react";
import { EditPostComponent } from "../EditPostComponent/EditPostsComponent";
import { toast } from "react-toastify";
import { addCommentHandler, deleteCommentHandler } from "../../Redux Management/features/postSlice/postsSlice";

function PostComponent({ posts }) {

    const { pathname } = useLocation()
    const { users } = useSelector((state) => state.userSlice)
    const { status, likedPosts } = useSelector((state) => state.postsSlice)
    const { token, userData } = useSelector((state) => state.authSlice)
    const [isOpen, setIsOpen] = useState(false)
    const [isEditModelOpen, setIsEditModelOpen] = useState(false)
    const [commentText, setCommentText] = useState("")
    const { postId } = useParams()


    const dispatch = useDispatch()



    useEffect(() => {
        if (status === "initial") {
            dispatch(fetchPosts())

        }

    }, [dispatch, status])


    function commentButtonHandler() {
        const commentData = {
            _id: uuid(),
            username: userData.username,
            text: commentText,
            votes: {
                upvotedBy: [],
                downvotedBy: [],
            },
        }



        try {
            if (commentText.length >= 1) {
                dispatch(addCommentHandler({ postId, commentData }))
                toast.success("comment added successfully")
                setCommentText("")
            } else {
                toast.error("please fill the comment first")

            }
        } catch (error) {
            toast.error("something is not right please try again later")

        }

    }

    function commentDeleteButtonHandler(commentId) {
        try {
            dispatch(deleteCommentHandler({ commentId, postId }))
            toast.success("comment deleted successfully")


        } catch (error) {
            toast.error("something is not right please try again")

        }
    }




    return (
        <div>
            {posts && <div> {pathname.includes("/prole") ? ("ashu") : (
                <div className="posts-bigger-div">
                    <div className="postcomponent-posts-main-div">
                        <div style={{ display: isEditModelOpen ? "unset" : "none" }} className="Edit-post-component">
                            <EditPostComponent PostsData={posts} buttonHandler={setIsEditModelOpen} />

                        </div>
                        <button className="threeDots" onClick={() => setIsOpen(!isOpen)}> {posts.username === userData.username && <BsThreeDots />}   </button>
                        <div style={{ visibility: isOpen ? "visible" : "hidden" }} className="edit-delete-button-div">
                            <h5 className="edit-button" onClick={() => {
                                setIsEditModelOpen(!isEditModelOpen)
                                setIsOpen(false)
                            }}>Edit</h5>
                            <hr />
                            <h5 className="delete-button" onClick={() => dispatch(deletePost({ postId: posts._id, token }))}>Delete</h5>

                        </div>
                        <div>
                            {users.map((us) => us.username === posts.username &&
                                <Link key={us._id} className="postcomponent-page-link" to={`/profile/${us._id}`}><img className="postcomponent-image" src={us.avatarUrl} alt="/" /></Link>
                            )
                            }
                        </div>

                        <div className="postcomponent-posts-userName" >
                            {users.map((us) => us.username === posts.username &&
                                <Link key={us._id} className="postcomponent-page-link" to={`/profile/${us._id}`}>
                                    <p className="postcomponent-posts-names" >{us.firstName + us.lastName}</p>
                                    <p className="username"> {`@${us.username}`} </p>

                                </Link>

                            )}
                        </div>

                        <small className="post-date"> {posts.createdAt}  </small>

                    </div>
                    <Link to={`/posts/${posts._id}`} className="postcomponent-content-div">

                        <p className="postcomponent-content-text"> {posts.content} </p>
                        <div> {posts.mediaURL && <embed src={posts.mediaURL} type="" />} </div>

                        <div className="mediaURL1-div"> {posts.mediaURL1 && <img className="mediaURL1" src={posts.mediaURL1} type="" />} </div>

                    </Link>
                    <hr className="postcomponent-hr" />
                    <div className="postcomponent-buttons-div">
                        <div> {likedPosts.some((item) => item._id === posts._id)

                            ? (<button className="liked-button" onClick={() => dispatch(removeLikedPosts({ postID: posts._id, token }))} > <FaHeart />
                            </button>)
                            : (<button className="liked-button" onClick={() => dispatch(addLikedPosts({ postID: posts._id, token }))} > <FaRegHeart /> </button>)}
                        </div>
                        <p className="like-count">{posts.likes.likeCount} </p>

                        

                        <div> {userData.bookmarks.some((item) => item._id === posts._id)
                            ? (<button className="bookmark-button" onClick={() => dispatch(removeBookMarkPosts({ postID: posts._id, token }))} > <IoIosBookmark />
                            </button>)
                            : (<button className="bookmark-button" onClick={() => dispatch(addBookMarkPosts({ postID: posts._id, token }))} > <PiBookmarkSimpleBold /> </button>)}
                        </div>



                        <Link to={`/posts/${posts._id}`}> {pathname.includes(`/posts`) ? ("") : <button className="comment-icon"> <BiMessageRounded /> </button>} </Link>


                    </div>

                    <div className="comment-box-big-container">  {pathname.includes(`/posts`) &&
                        <div>

                            <hr className="postcomponent-hr" />
                            <h3 className="comments-text">Comments</h3>
                            <div className="add-comment-div">
                                <input value={commentText} onChange={(e) => setCommentText(e.target.value)} className="add-comment-input" type="text" placeholder="Add Your Comment" />
                                <button onClick={commentButtonHandler} className="add-comment-button">+ Comment</button>
                            </div>

                            <div> {posts.comments.map((comment) => (
                                <div className="comment-box-main-div" key={comment._id}>
                                    <div className="comment-box-div">  {users.map((us) => us.username === comment.username &&
                                        <div key={us._id} className="comment-box-user-div" >
                                            <Link className="comment-box-user-image-div" to={`/profile/${us._id}`}>
                                                <img className="comment-box-user-image" src={us.avatarUrl} alt="" />
                                            </Link>

                                            <Link className="comment-box-user-name" to={`/profile/${us._id}`}>
                                                <p className="comment-box-name">{us.firstName + us.lastName}</p>
                                                <p className="comment-box-username"> {`@${us.username}`} </p>

                                            </Link>

                                            <button onClick={() => commentDeleteButtonHandler(comment._id)} style={{ display: userData.username === us.username ? "unset" : "none" }} className="delete-comment-button"> <AiFillDelete /> </button>

                                        </div>)}
                                    </div>


                                    <div className="comment-box-content"> {comment.text}</div>
                                    <hr className="postcomponent-hr" />
                                </div>


                            ))}
                            </div>
                        </div>

                    }  </div>

                </div>)} </div>}



        </div>
    )
}
export { PostComponent }