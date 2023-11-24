import { Link, useLocation } from "react-router-dom"
import avatarimage from "../../images/avatarimage.jpg"
import "./Nav.css"
import { useSelector } from "react-redux"

function Nav() {
    const { pathname } = useLocation()

    const { login , userData } = useSelector((state) => state.authSlice)



    return (
        <div className="navigation-main-div">
            <div className="nav-div"  >
                <Link style={{margin:pathname === "/login" || pathname === "/signup"  ? "auto" :"" }} to={ login ? "/" : "/signup" } className="nav-image-div">
                    <h1 className="cc-text">ChitChat</h1>
                </Link>

                <div className="nav-search-div" style={{display:pathname === "/login" || pathname === "/signup"  ? "none" :"" }}>
                    <input type="text" placeholder="Search 🔍" className="nav-search-input" />

                </div>

                <Link style={{display:pathname === "/login" || pathname === "/signup"  ? "none" :"" }} to={login ? "/myaccount" : "/signup"} className="nav-profile-div">
                    <img className="nav-profile-image" src={   userData.avatarUrl ?  userData.avatarUrl : avatarimage} alt="" />
                </Link>

            </div>

        </div>
    )
}
export { Nav }