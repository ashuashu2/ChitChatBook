import { Link, useLocation } from "react-router-dom"
import avatarimage from "../../images/avatarimage.jpg"
import "./Nav.css"
import { useSelector } from "react-redux"
import { useState } from "react"

function Nav() {
    const { pathname } = useLocation()
    const location = useLocation()

    const { login , userData } = useSelector((state) => state.authSlice)
    const { users } = useSelector((state)=>state.userSlice)
    const [isOpen ,setIsOpen] = useState(false)
    const [filterData ,setFilterData] = useState()



    function  inputChangeHandler(e) {
        setIsOpen(true)
        const value = e.target.value
        
        const filterUsersData = value.length >=1 &&  users.filter((user)=>user.firstName.toLowerCase().includes(value.toLowerCase()) );

        setFilterData(filterUsersData)

    }



    return (
        <div className="navigation-main-div">
            <div className="nav-div"  >
                <Link style={{margin:pathname === "/login" || pathname === "/signup"  ? "auto" :"" }} to={ login ? "/" : "/signup" } className="nav-image-div">
                    <h1 className="cc-text">ChitChat</h1>
                </Link>

                <div className="nav-search-div" style={{display:pathname === "/login" || pathname === "/signup"  ? "none" :"" }}>
                    <input onChange={inputChangeHandler}  type="text" placeholder="Search 🔍" className="nav-search-input" />
                    <div style={{display : isOpen ?"" :"none"}} className="nav-users-div"  >
                        {   filterData ? filterData.map((user)=>(
                            <div key={user._id} >
                            <Link onClick={()=>setIsOpen(false)} to={`/profile/${user._id}`} className="nav-userDetails-div">
                                <div>
                                    <img className="nav-userDetails-image" src={user.avatarUrl} alt="/"  />
                                </div>
                                <div className="nav-userDetails-names-div">
                                    <h5 style={{margin:0}}>{user.firstName }{ user.lastName }</h5>
                                
                                    </div>
                                   

                            </Link>
                             <hr />
                             </div>
                            
                        ))  : <h3 style={{color:"black"}}> Search Users! </h3> }

                    </div>

                </div>

                <Link  state={{from : location}} style={{display:pathname === "/login" || pathname === "/signup"  ? "none" :"" }} to={login ? "/myaccount" : "/signup"} className="nav-profile-div">
                    <img className="nav-profile-image" src={   userData.avatarUrl ?  userData.avatarUrl : avatarimage} alt="" />
                </Link>

            </div>

        </div>
    )
}
export { Nav }