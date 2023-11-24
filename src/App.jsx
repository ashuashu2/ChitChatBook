import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {Nav, RequireAuth, SideBar, UserFeed } from "./components/componentsIndex";
import { Explore,Bookmarks,LikedPosts,SingleUser,SinglePostDetail,LoginComponent,SignupComponent, Home, Profile  } from "./pages/PagesIndex";
import { useDispatch, useSelector } from "react-redux";




function App() {
  const { pathname } = useLocation()


  
return (
    <div className="App">
    <div className="navigation-div"> <Nav/> </div>
    <div className="content-div divs"> 
    <div className="sideBar-div"  style={{display:pathname === "/login"   || pathname === "/signup"  ? "none" :"" }} > <SideBar /></div>
    <div className="routes-div">
      <Routes>
        <Route path="/" element={ <RequireAuth> <Home/> </RequireAuth> } />
        <Route path="/explore" element={  <RequireAuth>  <Explore/> </RequireAuth> } />
        <Route path="/bookmarks" element={ <RequireAuth> <Bookmarks/> </RequireAuth>} />
        <Route path="/likedPosts" element={<RequireAuth> <LikedPosts/> </RequireAuth>} />
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/signup" element={<SignupComponent/>} />
        <Route path="/myaccount" element={ <RequireAuth> <Profile /> </RequireAuth> } />
        <Route path="/profile/:userId" element={ <RequireAuth> <SingleUser /></RequireAuth>} />
        <Route path="/posts/:postId" element={<RequireAuth><SinglePostDetail /></RequireAuth> } />
        



      </Routes>
      
      </div>
    <div className="userfeed-app-div" style={{display:pathname === "/login" || pathname === "/signup"  ? "none" :"" }}  ><UserFeed/></div>

   
      
      
      
    </div>
    
     
    </div>
  );
}

export default App;
