import { useSelector } from "react-redux"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

function RequireAuth({children}){

    const location = useLocation();

    const { login }  = useSelector((state)=>state.authSlice)

    return login ? 
     (children) : 
     (<Navigate to="/login" state={{ from : location }} replace /> )
}
export { RequireAuth }