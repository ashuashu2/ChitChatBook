import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect } from "react";

import "./UserCard.css"
import { fetchPosts } from "../../Redux Management/features/postSlice/postsServices";
import { PostComponent } from "../componentsIndex";



function UserCard({userData}){
    const { posts, status } = useSelector((state) => state.postsSlice)
    const dispatch = useDispatch()

   

    useEffect(() => {
        if (status === "initial") {
            dispatch(fetchPosts())
        }

    }, [dispatch, status])


    return(
        <div>
            {userData && (<div className="userCard-main-div">

                <div className="userCard-header-div">
                    <div className="userCard-header-icon"> <IoArrowBackOutline /> </div>
                    <div className="userCard-header-text">
                        <h5 className="userCard-header-text-name">{`${userData.firstName} ${userData.lastName}`} </h5>

                        <p className="userCard-header-posts"> 2 posts </p>
                    </div>
                </div>
                <div className="userdata-main-div">

                    <div className="userdata-div">
                        <img className="userdata-image" src={userData.avatarUrl} alt="" />
                        <div className="userdata-firstname-div">
                            <p className="userdata-firstname"> {`${userData.firstName} ${userData.lastName}`} </p>
                            <p> SDE-1 at Google </p>
                            <div className="userCard-bio-div">
                                <p className="userCard-bio-text"> {userData.bio} </p>
                                <div className="userCard-website-div">
                                    <h3><FaHandPointRight /></h3>
                                    <Link className="userCard-bio-Link" to={userData.website} >   {userData.website} </Link>
                                </div>


                            </div>

                        </div>

                        <div className="userCard-follow-button-div">
                            <button className="userCard-follow-button">+Follow</button>

                        </div>
                    </div>

                    <hr className="userCard-hr" />
                    <div className="followers-div">
                        <p className="followers-childs"> followings: {userData.following.length} </p>
                        <p className="followers-childs"> posts: {userData.posts} </p>
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
                        {posts.map((post) => post.username === userData.username && (

                            <div>
                                <PostComponent posts={post} />
                            </div>
                        ))}
                    </div>

                </div>

            </div>)}
        </div>

    )
}


export { UserCard }