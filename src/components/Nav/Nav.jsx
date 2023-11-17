import  ccimage  from "../images/ccimage.jpg"
import "./Nav.css"
import { FaBeer } from 'react-icons/fa';


function Nav() {
    return(
        <div>
          <div className="nav-div">
            <div className="nav-image-div">
                <h1  className="cc-text">ChitChat</h1> 
                </div>

            <div className="nav-search-div"> 
                <input type="text" placeholder="Search 🔍" className="nav-search-input"/>

            </div>

            <div className="nav-profile-div">
                <img className="ccImage2" src={ccimage} alt="" />
             </div>
             
            </div>

        </div>
    )
}
export { Nav }