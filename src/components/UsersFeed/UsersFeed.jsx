import { useEffect, useState } from "react"
import "./UsersFeed.css"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, followUser, unFollowUser } from "../../Redux Management/features/userSlice/userServices";

function UserFeed() {

    const { users, status } = useSelector((state) => state.userSlice)
    const dispatch = useDispatch();
    const { token, userData } = useSelector((state) => state.authSlice)




    useEffect(() => {
        // if (status === "initial") {
            dispatch(fetchUsers())
        // }

    }, [ dispatch,userData])

    // console.log(userData)
    // const allUsers = users &&  users.filter((user)=>user.followers.find((us)=>us.username !== userData.username && users ) )
    // console.log(allUsers)

    const sliceUsers =  users.slice(0,5)




    function followButtonHandler(id, token, userData) {
        dispatch(followUser({ followUserId: id, token, dispatch, userData }));
    }

    function unFollowButtonHandler(id, token, userData) {
        dispatch(unFollowUser({ followUserId: id, token, dispatch, userData }));


    }





    return (
        <div >
            <div className="userfeed-bigger-div">
                <h2 className="suggestion-text">  Suggestions For You </h2>
                <div className="userfeed-div">

                    { sliceUsers && sliceUsers.map((user) => (
                            <div key={user._id}>
                                <div className="users-main-div" key={user._id}>
                                    <Link to={`/profile/${user._id}`} className="users-img-div linkss">
                                        <img className="avatar" src={user.avatarUrl} alt="/" />
                                    </Link>

                                    <Link to={`/profile/${user._id}`} className="userfeed-name-div linkss">
                                        <h4>{user.firstName} {user.lastName}</h4>
                                        <small> {`@${user.username}`} </small>
                                    </Link>

                                    <div className="follow-button-div">
                                        {userData.following && userData.following.some((item) => item.username === user.username)

                                            ? <button className="follow-button" onClick={() => unFollowButtonHandler(user._id, token, user)} > UnFollow </button>

                                            : <button className="follow-button" onClick={() => followButtonHandler(user._id, token, user)} > +Follow </button>}




                                    </div>


                                </div>
                                <hr />
                            </div>


                        ))
                    }


                </div>
            </div>


        </div>
    )
}
export { UserFeed }