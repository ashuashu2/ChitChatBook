import { MdHome } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./SideBar.css"
import { NavLink, useLocation } from "react-router-dom";


function SideBar(){
    const location = useLocation()


    const getActiveStyle = ({ isActive }) => ({
       
        fontWeight: isActive ? "600" : "200",
        color: isActive ? "rgb(248, 212, 7)" : "",
        fontSize: isActive ? "1.2rem":""
      });

    return(
        <div className="sidebar-icons-main-div">
            <NavLink   to="/"  style={getActiveStyle}  state={{ from: location }} className="sidebar-icons-div">
                <h3 className="sidebar-icons-emoji"> <MdHome/> </h3>
                <h3 className="sidebar-icons-text">Home</h3>
            </NavLink>

            <NavLink   to="/explore"  style={getActiveStyle}  state={{ from: location }} className="sidebar-icons-div">
                <h3 className="sidebar-icons-emoji"> <MdExplore/> </h3>
                <h3 className="sidebar-icons-text">Explore</h3>
            </NavLink>

            <NavLink   to="/bookmarks"  style={getActiveStyle}  state={{ from: location }} className="sidebar-icons-div">
                <h3 className="sidebar-icons-emoji"> <FaBookmark/> </h3>
                <h3 className="sidebar-icons-text">Bookmarks</h3>
            </NavLink>

            <NavLink   to="/likedPosts"  style={getActiveStyle}  state={{ from: location }} className="sidebar-icons-div">
                <h3 className="sidebar-icons-emoji"> <FaHeart/> </h3>
                <h3 className="sidebar-icons-text">Liked Posts</h3>
            </NavLink>

           

        </div>
    )
}
export { SideBar }