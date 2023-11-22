import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../Redux Management/features/postSlice/postsServices"
import { PostComponent } from "../../components/componentsIndex"
import { useEffect } from "react"
import { IoArrowBackOutline } from "react-icons/io5";

import "./Home.css"

function Home() {
    const { posts, status } = useSelector((state) => state.postsSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        if (status === "initial") {
            dispatch(fetchPosts())

        }
    }, [dispatch, status])

    const users = {
        _id: "t7cZfWIp-q",
        firstName: "Adarsh",
        lastName: "Balika",
        followers: [],
        followings: [{
            _id: "1T6Be1QpLm",
            firstName: "Janny",
            lastName: "Sehgal",
            followers: [],
            followings: [],
            username: "jannySehgal",
            password: "jannySehgal123",
            bio: "Whats in bio?",
            bookmarks: [],
            avatarUrl:
                "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554256/socialmedia/avatars/jane-doe_il3cvx.webp",
            website: "https://JannySehgal.netlify.app/",
            createdAt: "2022-01-01T10:55:06+05:30",
        },
        {
            _id: "79Gksh9otl",
            firstName: "John",
            lastName: "Doe",
            followers: [],
            followings: [],
            username: "johndoe",
            password: "johndoe123",
            bio: "Hello World",
            bookmarks: [],
            avatarUrl:
                "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
            website: "https://JohnDoe.netlify.app/",
            createdAt: "2022-01-02T10:55:06+05:30",
        }],
        username: "adarshbalika",
        password: "adarshBalika123",
        bio: "Be yourself!",
        bookmarks: [],
        avatarUrl:
            "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
        website: "https://adasrshBalika.netlify.app/",
        createdAt: "2022-01-01T10:55:06+05:30",
    }

    return (
        <div>
            <div className="home-header-div">
                    <h4 className="home-header-icon"> <IoArrowBackOutline /> </h4>
                        <h4 className="home-header-text"> Home </h4>
                </div>
        <div className="homepage-main-div" >

            
            <div> <div className="singleuser-posts-div">

                {users.followings.length > 1 ? users.followings.map((us) => posts.map((post) => us.username === post.username && (

                    <div>
                        <PostComponent posts={post} />
                    </div>
                ))

                ) : ("There Is No Friends In Your List")}
            </div>
            </div>


        </div>
        </div>
    )
}
export { Home }