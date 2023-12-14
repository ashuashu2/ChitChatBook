import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Explore.css"
import { fetchPosts } from "../../Redux Management/features/postSlice/postsServices";
import { PostComponent } from "../../components/componentsIndex";
import { ArrowButtonHeader } from "../../components/ArrowButtonHeader/ArrowButtonHeader";

function Explore(){
    const { posts,status } = useSelector((state)=>state.postsSlice)

     const dispatch = useDispatch()


    useEffect(()=>{
        if (status ==="initial") {
            dispatch(fetchPosts())
        }

    },[dispatch,status])

    
   




    return (
        <div>
             <div> <ArrowButtonHeader pathname="Explore" /> </div>
            <div className="explore-page-main-div"> { posts.map((post)=>(
           <div key={post._id}> <PostComponent posts={post} /> </div>
            )) }
             </div>
        </div>
    )
}
export {Explore }