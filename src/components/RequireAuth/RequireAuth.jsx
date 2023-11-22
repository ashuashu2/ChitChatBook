import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

function RequireAuth({children}){
    const { login }  = useSelector((state)=>state.authSlice)

    return login ?  (children) : (<Navigate to="/signup" /> )
}
export { RequireAuth }