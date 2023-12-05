import "./FollowingComponent.css"
import { Link } from "react-router-dom"

function FollowingComponent({followUserData,setIsFollowingModel}){
    return (
        <div className="following-detail-main-div">
            <div className="following-text-div">
                 <h3>following</h3>
                 <button onClick={()=>setIsFollowingModel(false)}> X </button>
            </div>
           
            <hr />
            { followUserData && followUserData.map((user)=>(
                <div key={user._id} >
                    <Link to={`/profile/${user._id}`} className="following-detail-div">
                    <div className="following-detail-img-div">
                        <img className="following-detail-img" src={user.avatarUrl && user.avatarUrl} alt="" />
                    </div>
                    <div className="following-detail-name-div">
                    <h4>{user.firstName }{ user.lastName}  </h4>
                    <h6> @{user.username} </h6>

                    </div>
                   
                    
                </Link>
                <hr />

                </div>
                

            ))}
        </div>
    )
}
export { FollowingComponent}