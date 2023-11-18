import { useEffect, useState } from "react"
import "./UsersFeed.css"
import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from "../../Redux Management/features/postSlice/userSlice/userServices";

function UserFeed(){

   const { users ,status,error } = useSelector((state)=>state.userSlice)
   const dispatch = useDispatch();



    const sliceUsers = users.slice(0,5)
    useEffect(()=>{
        if (status==="initial") {
            dispatch(fetchUsers())
        }

    },[status,dispatch])


    console.log(error)

   

    return(
        <div >
            <div className="userfeed-bigger-div">
                <h2 className="suggestion-text">  Suggestions For You </h2>
                <div className="userfeed-div">
                    { sliceUsers && sliceUsers.map((user)=>(
                        <div>
                            <div className="users-main-div" key={user._id}>
                            <div className="users-img-div"> 
                                <img  className="avatar" src={user.avatarUrl} alt="" />
                            </div>

                            <div className="userfeed-name-div">
                                <h4>{user.firstName} {user.lastName}</h4>
                                <small> {`@${user.username}`} </small>
                            </div>

                            <div className="follow-button-div">
                                <button className="follow-button">+Follow</button>

                            </div>


                        </div>
                        <hr  />
                        </div>
                        
                        
                    )) }

                </div>
            </div>
            

        </div>
    )
}
export { UserFeed }