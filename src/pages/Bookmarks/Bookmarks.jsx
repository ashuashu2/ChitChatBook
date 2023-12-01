import "./Bookmarks.css"
import { useSelector } from "react-redux"
import { PostComponent } from "../../components/PostComponent/PostComponent"
import { ArrowButtonHeader } from "../../components/ArrowButtonHeader/ArrowButtonHeader";

function Bookmarks() {
    const { userData } = useSelector((state) => state.authSlice);





    return (
        <div >
            <div> <ArrowButtonHeader pathname="Bookmark Posts" /> </div>

            <div>
                {userData.bookmarks.length >= 1 ?
                    (<div>
                        {userData.bookmarks.map((post) => (
                            <div>
                                <PostComponent posts={post} />
                            </div>

                        ))}
                    </div>)
                    : (<h1 className="No_Bookmark_Posts_heading"> No Bookmark Posts Yet </h1>)
                }

            </div>
        </div>
    )
}
export { Bookmarks }