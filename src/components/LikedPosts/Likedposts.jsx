import { IoArrowBackOutline } from "react-icons/io5"
import "./Likedposts.css"

function LikedPosts(){
    return (

        <div className="likedPostPage-main-div">
            <div className="likedPost-header-div">
                    <h4 className="likedPost-header-icon"> <IoArrowBackOutline /> </h4>
                        <h4 className="likedPost-header-text"> LikedPosts </h4>
                </div>
        </div>
    )
}
export {LikedPosts }