import { Link } from "react-router-dom"
import errorIamge from "../../images/404Error.webp"

function Error404() {
    return (
        <div  >
            <img src={errorIamge} alt="" />
            <div  style={{ backgroundColor: "black" , width:"max-content" ,margin:"auto" ,padding:"1rem" ,borderRadius:"50%" }} ><Link to="/" style={{ color: "gold", textDecoration: "none"  }}> Go TO Home </Link></div>

        </div>













        

    )
}
export { Error404 } 