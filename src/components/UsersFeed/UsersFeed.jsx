import { useEffect, useState } from "react"
import "./UsersFeed.css"
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchUsers, followUser, unFollowUser } from "../../Redux Management/features/userSlice/userServices";
import { changeSortingOfPosts } from "../../Redux Management/features/postSlice/postsSlice";

function UserFeed() {

    const { users } = useSelector((state) => state.userSlice)
    const { token, userData } = useSelector((state) => state.authSlice)
    const dispatch = useDispatch();
    const {pathname} = useLocation()




    useEffect(() => {
            dispatch(fetchUsers())

    }, [ dispatch,userData])

   

    const sliceUsers =  users.slice(0,5)




    function followButtonHandler(id, token, userData) {
        dispatch(followUser({ followUserId: id, token, dispatch, userData }));
    }

    function unFollowButtonHandler(id, token, userData) {
        dispatch(unFollowUser({ followUserId: id, token, dispatch, userData }));


    }
    function trendingButtonClickHandler(){
        dispatch(changeSortingOfPosts("trending"))
    

    }
    function latestButtonClickHandler(){
        dispatch(changeSortingOfPosts("latest"))



    }





    return (
        <div >
            <div className="userfeed-bigger-div">
            <div className="trending-button-div" style={{display: pathname === "/" ? "unset" :"none"}} >
                <button className="trending-button" onClick={trendingButtonClickHandler}>Trending</button>
                <button className="latest-button" onClick={latestButtonClickHandler}>Latest</button>

             </div>
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