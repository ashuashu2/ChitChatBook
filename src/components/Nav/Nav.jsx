import { Link } from "react-router-dom"
import ccimage from "../../images/ccimage.jpg"
import "./Nav.css"
import { useSelector } from "react-redux"

function Nav() {

    const { login } = useSelector((state) => state.authSlice)



    return (
        <div className="navigation-main-div">
            <div className="nav-div">
                <Link to="/" className="nav-image-div">
                    <h1 className="cc-text">ChitChat</h1>
                </Link>

                <div className="nav-search-div">
                    <input type="text" placeholder="Search 🔍" className="nav-search-input" />

                </div>

                <Link to={login ? "/myaccount" : "/signup"} className="nav-profile-div">
                    <img className="ccImage2" src={ccimage} alt="" />
                </Link>

            </div>

        </div>
    )
}
export { Nav }