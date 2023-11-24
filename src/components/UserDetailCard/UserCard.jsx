import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail, MdOutlineLogout } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
import avatarimage from "../../images/avatarimage.jpg"

import "./UserCard.css"
import { fetchPosts } from "../../Redux Management/features/postSlice/postsServices";
import { PostComponent } from "../componentsIndex";
import { logoutUser } from "../../Redux Management/features/authSlice/AuthSlice";
import { followUser } from "../../Redux Management/features/userSlice/userServices";



function UserCard({ userData }) {
    const { pathname } = useLocation()
    const { posts, status } = useSelector((state) => state.postsSlice)
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.authSlice)



    useEffect(() => {
        if (status === "initial") {
            dispatch(fetchPosts())
        }

    }, [dispatch, status])


    const postsData =   posts.filter((post) => post.username === userData.username)


    function followButtonHandler(){
        dispatch(
            followUser({ followUserId: userData._id, token })
          )
    }










    return (
        <div>
            {userData.username && (<div className="userCard-main-div">

                <div className="userCard-header-div">
                    <div className="userCard-header-icon"> <IoArrowBackOutline /> </div>
                    <div className="userCard-header-text">
                        <h5 className="userCard-header-text-name">{`${userData.firstName} ${userData.lastName}`} </h5>

                        <p className="userCard-header-posts"> posts {postsData.length}  </p>
                    </div>
                </div>
                <div className="userdata-main-div">

                    <div className="userdata-div">
                        <img className="userdata-image" src={userData.avatarUrl ? userData.avatarUrl : avatarimage} alt="" />
                        <div className="userdata-firstname-div">
                            <p className="userdata-firstname"> {`${userData.firstName} ${userData.lastName}`} </p>
                            <p> SDE-1 at Google </p>
                            <div className="userCard-bio-div">
                                <p className="userCard-bio-text"> {userData.bio ? userData.bio : "Hello World"} </p>
                                <div className="userCard-website-div">
                                    <h3><FaHandPointRight /></h3>
                                    <Link className="userCard-bio-Link" to={userData.website} >   {userData.website ? userData.website : `${userData.firstName}${userData.lastName}.netlify.app`} </Link>
                                </div>


                            </div>

                        </div>

                        <div>
                            {pathname === `/myaccount` ?
                                (<div className="userCard-follow-button-div">
                                    <button className="edit-profile-button">Edit Profile</button>
                                    <button className="userCard-logout-button" onClick={() => dispatch(logoutUser())()} > <MdOutlineLogout /></button>

                                </div>)
                                : (<div className="userCard-follow-button-div">
                                    <button className="userCard-follow-button"  onClick={followButtonHandler} > +Follow </button>

                                </div>)}
                        </div>


                    </div>

                    <hr className="userCard-hr" />
                    <div className="followers-div">
                        <p className="followers-childs"> followings: {userData.following.length} </p>

                        <p className="followers-childs"> posts: {postsData.length} </p>

                        <p className="followers-childs"> followers: {userData.followers.length} </p>
                    </div>
                    <hr className="userCard-hr" />

                    <div className="userCard-about-div">
                        <h5 className="userCard-about-heading"> About </h5>
                        <p>
                            I am a software developer who is well versed with JavaScript/ES6+,ReactJS & Redux and an intermediate in UI/UX concepts. I can build web apps also eager to learn new technologies and methodologies
                        </p>
                    </div>
                    <hr className="userCard-hr" />
                    <div className="contact-detail-div">
                        <h5 className="contact-detail-heading">Contact Me</h5>
                        <p> <FaMobileButton /> 9179910419</p>
                        <p> <MdEmail /> {`${userData.firstName.toLocaleLowerCase()}${userData.lastName.toLocaleLowerCase()}@gmail.com`}  </p>

                    </div>
                    <hr className="userCard-hr" />
                    <div className="userCard-posts-div">
                       
                          {  posts.map((post) => post.username === userData.username && (

                                <div>
                                    <PostComponent posts={post} />
                                </div>
                            ))

                        }

                    </div>

                </div>

            </div>)
            }
        </div >

    )
}


export { UserCard }