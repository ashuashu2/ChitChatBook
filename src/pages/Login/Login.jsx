import axios from "axios";
import "./Login.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../Redux Management/features/authSlice/AuthServices";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginComponent() {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const from = location?.state?.from.pathname




  async function loginButtonHandler() {
    const data = {
      username: username,
      password: password
    }
    try {
      if (username.length >= 1 && password.length >= 1) {
        dispatch(loginHandler(data)).then(() => {
          setTimeout(() => {
            navigate(from ? from : "/");
            toast.success(`login succesfully! Welcome ${username} `)
            
          }, 500);
        })

      } else {
        toast.info("please fill all the credentials")
      }


    } catch (error) {
      console.log(error)

    }

  }

  function guestButtonHandler(){
    {
      const data = {
        username: "ashutosh",
        password: "ashu@shu12"
      }
      try {
        if (data.username.length >= 1 && data.password.length >= 1) {
          dispatch(loginHandler(data)).then(() => {
            setTimeout(() => {
              navigate(from ? from : "/");
              toast.success(`login succesfully! Welcome Again ${data.username} `)

            }, 500);
          }).catch(()=>{
            navigate("/signup");
            toast.warning("please signup first ")


          })
  
        } else {
          toast.info("please fill all the credentials")
        }
      } catch (error) {
        console.log(error)
  
      }
    }
  } 


  return (
    <div className="login-main-div">
      <div className="login-small-div">

        <h2 className="login-text-div">Log-<span className="in-text-login">in</span></h2>
        <div className="login-input-div">
          <fieldset>
            <legend>Userame :</legend>
            <input onChange={(e) => setUserName(e.target.value)} placeholder="Enter username" type="text" />
          </fieldset>
        </div>

        <div className="login-input-div">
          <fieldset>
            <legend>Password :</legend>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="text" />
          </fieldset>
        </div>
        <div className="login-button-div">
          <div className="login-button" onClick={loginButtonHandler} >Login</div>
          <div className="guest-button" onClick={guestButtonHandler} >Login As Guest</div>

        </div>
        <div className="loginpage-signup-link">
          <h4>Dont have an account?</h4>
          <Link className="Sign-up-here-link" to="/signup">Sign up here</Link>
        </div>


      </div>

    </div>
  )
}
export { LoginComponent } 