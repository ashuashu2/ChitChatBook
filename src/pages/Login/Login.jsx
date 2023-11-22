import axios from "axios";
import "./Login.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../Redux Management/features/authSlice/AuthServices";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
    const navigate = useNavigate()


  async function loginButtonHandler() {
    const data={
        email:email,
        password:password
    }
    try {
      dispatch(loginHandler(data)).then(() => {
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      
    } catch (error) {
      console.log(error)
      
    }
  
  }

    
    return (
      <div className="login-main-div">
            <div className="login-small-div">
                <div className="login-heading">
                    <h1 className="CC-text-login">CC</h1>
                    <h2>ChitChat</h2>
                </div>
                <h2 className="login-text">Login</h2>
                <div className="login-input-div">
                    <fieldset>
                        <legend>Email :</legend>
                        <input onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Email" type="text" />
                    </fieldset>
                </div>

                <div className="login-input-div">
                    <fieldset>
                        <legend>Password :</legend>
                        <input onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" type="text" />
                    </fieldset>
                </div>
                <div className="login-button-div">
                    <button onClick={loginButtonHandler} >Login</button>
                </div>


            </div>

        </div> 
    )
}
export { LoginComponent } 