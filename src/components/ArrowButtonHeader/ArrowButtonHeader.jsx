import { IoArrowBackOutline } from "react-icons/io5"
import "./ArrowButtonHeader.css"
import { useLocation, useNavigate } from "react-router-dom"

function ArrowButtonHeader({pathname}){
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from.pathname

    return(
        <div className="header-div">
                    <h4 className="header-icon" onClick={()=>navigate(from ? from : "/")} > <IoArrowBackOutline /> </h4>
                        <h4 className="header-text"> {pathname} </h4>
        </div>
    )
}
export { ArrowButtonHeader }