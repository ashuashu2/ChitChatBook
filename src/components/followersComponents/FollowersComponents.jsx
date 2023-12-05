import { Link } from "react-router-dom"
import "./FollowersComponents.css"

function FollowersComponent({followUserData,setIsFollowerModel }){
    return (
        <div className="followers-detail-main-div">
            <div className="follower-text-div">
                 <h3>followers</h3>
                 <button onClick={()=>setIsFollowerModel(false)}> X </button>
            </div>
           
            <hr />
            { followUserData && followUserData.map((user)=>(
                <div key={user._id} >
                    <Link to={`/profile/${user._id}`} className="followers-detail-div">
                    <div className="followers-detail-img-div">
                        <img className="followers-detail-img" src={user.avatarUrl && user.avatarUrl} alt="" />
                    </div>
                    <div className="followers-detail-name-div">
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
export { FollowersComponent}