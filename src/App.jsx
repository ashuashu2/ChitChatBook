import "./App.css";
import { Home } from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { UserFeed } from "./components/UsersFeed/UsersFeed";
import { SideBar } from "./components/SideBar/SideBar";
import { Route, Routes} from "react-router-dom";
import { Explore } from "./components/Explore/Explore";
import { Bookmarks } from "./components/Bookmarks/Bookmarks";
import { LikedPosts } from "./components/LikedPosts/Likedposts";
import { SingleUser } from "./components/singleUserPage/SingleUser";
import { SinglePostDetail } from "./components/SinglePostPage/SinglePost";


function App() {



  return (
    <div className="App">
    <div className="navigation-div"> <Nav/> </div>
    <div className="content-div divs"> 
    <div className="sideBar-div"> <SideBar /></div>
    <div className="routes-div">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/likedPosts" element={<LikedPosts/>} />
        <Route path="/profile/:userId" element={<SingleUser />} />
        <Route path="/posts/:postId" element={<SinglePostDetail />} />



      </Routes>
      
      </div>
    <div className="userfeed-app-div"><UserFeed/></div>

   
      
      
      
    </div>
    
     
    </div>
  );
}

export default App;
