import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";




import "./SingleUser.css"
import { PostComponent } from "../PostComponent/PostComponent";
import { fetchPosts } from "../../Redux Management/features/postSlice/postsServices";
import { useEffect } from "react";

function SingleUser() {
    const { userId } = useParams()
    const { users } = useSelector((state) => state.userSlice)
    const { posts, status } = useSelector((state) => state.postsSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "initial") {
            dispatch(fetchPosts())
        }

    }, [dispatch, status])



    const findUser = (data, id) => {
        return data.find((user) => user._id === id)
    }
    const userData = findUser(users, userId)

    return (
        <div>
            {userData && (<div className="singleuser-main-div">

                <div className="single-user-header-div">
                    <div className="single-user-header-icon"> <IoArrowBackOutline /> </div>
                    <div className="single-user-header-text">
                        <h5 className="single-user-header-text-name">{`${userData.firstName} ${userData.lastName}`} </h5>

                        <p className="single-user-header-posts"> 2 posts </p>
                    </div>
                </div>
                <div className="userdata-main-div">

                    <div className="userdata-div">
                        <img className="userdata-image" src={userData.avatarUrl} alt="" />
                        <div className="userdata-firstname-div">
                            <p className="userdata-firstname"> {`${userData.firstName} ${userData.lastName}`} </p>
                            <p> SDE-1 at Google </p>
                            <div className="singleuser-bio-div">
                                <p className="singleuser-bio-text"> {userData.bio} </p>
                                <div className="singleuser-website-div">
                                    <h3><FaHandPointRight /></h3>
                                    <Link className="singleuser-bio-Link" to={userData.website} >   {userData.website} </Link>
                                </div>


                            </div>

                        </div>

                        <div className="singleuser-follow-button-div">
                            <button className="singleuser-follow-button">+Follow</button>

                        </div>
                    </div>

                    <hr className="single-user-hr" />
                    <div className="followers-div">
                        <p className="followers-childs"> followings: {userData.followings.length} </p>
                        <p className="followers-childs"> posts: {userData.posts} </p>
                        <p className="followers-childs"> followers: {userData.followers.length} </p>
                    </div>
                    <hr className="single-user-hr" />

                    <div className="singleuser-about-div">
                        <h5 className="singleuser-about-heading"> About </h5>
                        <p>
                            I am a software developer who is well versed with JavaScript/ES6+,ReactJS & Redux and an intermediate in UI/UX concepts. I can build web apps also eager to learn new technologies and methodologies
                        </p>
                    </div>
                    <hr className="single-user-hr" />
                    <div className="contact-detail-div">
                        <h5 className="contact-detail-heading">Contact Me</h5>
                        <p> <FaMobileButton /> 9179910419</p>
                        <p> <MdEmail /> {`${userData.firstName.toLocaleLowerCase()}${userData.lastName.toLocaleLowerCase()}@gmail.com`}  </p>

                    </div>
                    <hr className="single-user-hr" />
                    <div className="singleuser-posts-div">
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
export { SingleUser }