import "./Likedposts.css"
import { useSelector } from "react-redux"
import { PostComponent } from "../../components/PostComponent/PostComponent";
import { ArrowButtonHeader } from "../../components/ArrowButtonHeader/ArrowButtonHeader";

function LikedPosts(){
    const { likedPosts } = useSelector((state)=>state.postsSlice);
    const { userData } = useSelector((state)=>state.authSlice);
    
     const allLikedPosts = likedPosts.filter((item)=>item.likes.likedBy.find((post)=>post.username === userData.username))
    
   



    return (

        <div className="likedPostPage-main-div">
            <div> <ArrowButtonHeader pathname="Liked Posts" /> </div>
                <div>
                    { allLikedPosts.length >=1 ?  allLikedPosts.map((item)=>(
                        <div key={item._id}>
                            <PostComponent  posts={item} />

                        </div>
                    ))  : <h1 className="No_Liked_Posts_heading"> No Liked Posts Yet </h1> }
                     
                    

                </div>
        </div>
    )
}
export {LikedPosts }