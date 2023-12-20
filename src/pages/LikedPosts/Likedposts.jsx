import { useSelector } from "react-redux"
import { PostComponent } from "../../components/PostComponent/PostComponent";
import { ArrowButtonHeader } from "../../components/ArrowButtonHeader/ArrowButtonHeader";
import "./Likedposts.css"

function LikedPosts(){
    const { likedPosts } = useSelector((state)=>state.postsSlice);
    const { userData } = useSelector((state)=>state.authSlice);
   



    return (

        <div >
            <div> <ArrowButtonHeader pathname="Liked Posts" /> </div>
                <div className="likedPostPage-main-div">
                    { likedPosts.length >=1 ?  likedPosts.map((item)=>(
                        <div key={item._id}>
                            <PostComponent  posts={item} />

                        </div>
                    ))  : <h1 className="No_Liked_Posts_heading"> No Liked Posts Yet </h1> }
                     
                    

                </div>
        </div>
    )
}
export {LikedPosts }