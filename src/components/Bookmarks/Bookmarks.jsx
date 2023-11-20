import { IoArrowBackOutline } from "react-icons/io5"
import "./Bookmarks.css"

function Bookmarks(){
    return (
         <div className="bookmarksPage-main-div">
            <div className="bookmarks-header-div">
                    <h4 className="bookmarks-header-icon"> <IoArrowBackOutline /> </h4>
                        <h4 className="bookmarks-header-text"> Bookmarked </h4>
                </div>
        </div>
    )
}
export {Bookmarks }