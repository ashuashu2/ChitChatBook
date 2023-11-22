import { useParams } from "react-router-dom"
import "./SinglePost.css"
import { useSelector } from "react-redux"
import { PostComponent } from "../../components/componentsIndex"

function SinglePostDetail() {
    const { postId } = useParams()
    const { posts } = useSelector((state) => state.postsSlice)
    const findPost = (data, id) => {
        return data.find((post) => post._id === id)
    }
    const postData = findPost(posts, postId)


    return (
        <div className="singlepost-main-div">
            <div> <PostComponent posts={postData} />  </div>
            
        </div>
    )
}
export { SinglePostDetail } 