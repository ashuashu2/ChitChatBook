import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../Redux Management/features/postSlice/postsServices"
import { FaRegHeart } from "react-icons/fa6";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { BiMessageRounded } from "react-icons/bi";

import "./Explore.css"

function Explore(){
    const { posts,status,error } = useSelector((state)=>state.postsSlice)
    const { users } = useSelector((state)=>state.userSlice)
    console.log(users)

    const dispatch = useDispatch()

    useEffect(()=>{
        if (status ==="initial") {
            dispatch(fetchPosts())
        }

    },[dispatch,status])
   




    return (
        <div>
            <div className="explore-page-main-div"> { posts.map((post)=>(
              <div  className="posts-bigger-div">
                 <div className="explore-posts-main-div"> 
                    <div>
                        {  users.map((us)=>us.username === post.username && <img className="explore-image" src={us.avatarUrl} alt="/"  /> )  } 
                    </div>
                    
                 <div className="explore-posts-userName" >
                        {  users.map((us)=>us.username === post.username && 
                    <div>
                        <p className="explore-posts-names" >{us.firstName  +  us.lastName}</p>
                        <p className="username"> {`@${us.username}`} </p>
                        
                    </div>
                    
                     )  } 
                </div>

                <small className="post-date"> {post.createdAt}  </small>

                 </div>
                 <div className="explore-content-div">
                    <p className="explore-content-text"> {post.content} </p>
                   <div> { post.mediaURL && <embed src={post.mediaURL} type="" /> } </div> 
                 </div>
                 <hr />
                 <div className="explore-buttons-div">
                    <button> <FaRegHeart/> </button>
                    <button> <PiBookmarkSimpleBold/> </button>
                    <button> <BiMessageRounded/> </button>

                 </div>
             </div>
            )) }
             </div>
        </div>
    )
}
export {Explore }