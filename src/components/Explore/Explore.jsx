import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../Redux Management/features/postSlice/postsServices"
import "./Explore.css"
import { PostComponent } from "../PostComponent/PostComponent";
import { IoArrowBackOutline } from "react-icons/io5";

function Explore(){
    const { posts,status,error } = useSelector((state)=>state.postsSlice)
     const dispatch = useDispatch()

    useEffect(()=>{
        if (status ==="initial") {
            dispatch(fetchPosts())
        }

    },[dispatch,status])
   




    return (
        <div>
             <div className="explore-header-div">
                    <h4 className="explore-header-icon"> <IoArrowBackOutline /> </h4>
                        <h4 className="explore-header-text"> Explore </h4>
                </div>
            <div className="explore-page-main-div"> { posts.map((post)=>(
           <div> <PostComponent posts={post} /> </div>
            )) }
             </div>
        </div>
    )
}
export {Explore }