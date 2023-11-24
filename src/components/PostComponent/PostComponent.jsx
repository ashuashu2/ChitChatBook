import { Link, useLocation } from "react-router-dom"
import "./PostComponent.css"
import { useDispatch, useSelector } from "react-redux"
import { FaRegHeart } from "react-icons/fa6";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { BiMessageRounded } from "react-icons/bi";
import { useEffect } from "react";
import { fetchPosts } from "../../Redux Management/features/postSlice/postsServices";

function PostComponent({ posts }) {

    const { pathname } = useLocation()
    const { users } = useSelector((state) => state.userSlice)
    const { status } = useSelector((state) => state.postsSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "initial") {
            dispatch(fetchPosts())

        }

    }, [dispatch, status])


    return (
        <div>
            {posts && <div> {pathname.includes("/prole") ? ("ashu") : (
                <div className="posts-bigger-div">
                    <div className="postcomponent-posts-main-div">
                        <div>
                            {users.map((us) => us.username === posts.username &&
                                <Link className="postcomponent-page-link" to={`/profile/${us._id}`}><img className="postcomponent-image" src={us.avatarUrl} alt="/" /></Link>
                            )
                            }
                        </div>

                        <div className="postcomponent-posts-userName" >
                            {users.map((us) => us.username === posts.username &&
                                <Link className="postcomponent-page-link" to={`/profile/${us._id}`}>
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
                    </Link>
                    <hr className="postcomponent-hr" />
                    <div className="postcomponent-buttons-div">
                        <button> <FaRegHeart /> </button>
                        <button> <PiBookmarkSimpleBold /> </button>
                        <div> {pathname.includes(`/posts`) ? ("") : <button className="comment-icon"> <BiMessageRounded /> </button>} </div>


                    </div>

                    <div className="comment-box-big-container">  {pathname.includes(`/posts`) &&
                        <div>

                            <hr className="postcomponent-hr" />
                            <h3 className="comments-text">Comments</h3>

                <div> {posts.comments.map((comment) => (
                   <div className="comment-box-main-div" key={comment._id}>
                       <div className="comment-box-div">  { users.map((us)=>us.username === comment.username && 
                           <div  key={us._id}  className="comment-box-user-div" >
                              <Link className="comment-box-user-image-div" to={`/profile/${us._id}`}> 
                                     <img className="comment-box-user-image" src={us.avatarUrl} alt="" /> 
                              </Link>

                              <Link className="comment-box-user-name" to={`/profile/${us._id}`}>
                                    <p className="comment-box-name">{us.firstName + us.lastName}</p>
                                    <p className="comment-box-username"> {`@${us.username}`} </p>

                               </Link>

                            </div>)  } 
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