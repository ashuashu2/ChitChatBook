import "./App.css";
import { Home } from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { UserFeed } from "./components/UsersFeed/UsersFeed";
import { SideBar } from "./components/SideBar/SideBar";


function App() {
  return (
    <div className="App">
    <div> <Nav/> </div>
    <div className="content-div"> 
    <div className="sideBar-div"> <SideBar/></div>
    <div className="routes-div"><Home/></div>
    <div><UserFeed/></div>

   
      
      
      
    </div>
    
     
    </div>
  );
}

export default App;
