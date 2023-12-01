import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Nav, RequireAuth, SideBar, UserFeed } from "./components/componentsIndex";
import { Explore, Bookmarks, LikedPosts, SingleUser, SinglePostDetail, LoginComponent, SignupComponent, Home, Profile } from "./pages/PagesIndex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Error404 } from "./pages/404 Pages/Error404";
import { useEffect } from "react";





function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])





  return (
    <div className="App">
      <div className="navigation-div"> <Nav /> </div>
      <div className="content-div divs">
        <div className="sideBar-div" style={{ display: pathname === "/login" || pathname === "/signup" ||pathname === "*"  ? "none" : "" }} > <SideBar /></div>
        <div className="routes-div">
          <Routes>
            <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
            <Route path="/explore" element={<RequireAuth>  <Explore /> </RequireAuth>} />
            <Route path="/bookmarks" element={<RequireAuth> <Bookmarks /> </RequireAuth>} />
            <Route path="/likedPosts" element={<RequireAuth> <LikedPosts /> </RequireAuth>} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route  path="*" element={<Error404 />} />

            <Route path="/myaccount" element={<RequireAuth> <Profile /> </RequireAuth>} />
            <Route path="/profile/:userId" element={<RequireAuth> <SingleUser /></RequireAuth>} />
            <Route path="/posts/:postId" element={<RequireAuth><SinglePostDetail /></RequireAuth>} />




          </Routes>
          

        </div>
        <div className="userfeed-app-div" style={{ display: pathname === "/login" || pathname === "/signup" ? "none" : "" }}  ><UserFeed /></div>





      </div>
      <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />


    </div>
  );
}

export default App;
