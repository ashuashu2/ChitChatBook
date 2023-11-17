import { MdHome } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



import "./SideBar.css"

function SideBar(){
    return(
        <div className="sidebar-icons-main-div">
            <div className="sidebar-icons-div">
                <h2 className="sidebar-icons-emoji"> <MdHome/> </h2>
                <h2 className="sidebar-icons-text">Home</h2>
            </div>

            <div className="sidebar-icons-div">
                <h2 className="sidebar-icons-emoji"> <MdExplore/> </h2>
                <h2 className="sidebar-icons-text">Explore</h2>
            </div>

            <div className="sidebar-icons-div">
                <h2 className="sidebar-icons-emoji"> <FaBookmark/> </h2>
                <h2 className="sidebar-icons-text">Bookmarks</h2>
            </div>

            <div className="sidebar-icons-div">
                <h2 className="sidebar-icons-emoji"> <FaHeart/> </h2>
                <h2 className="sidebar-icons-text">Liked Posts</h2>
            </div>

           

        </div>
    )
}
export { SideBar }