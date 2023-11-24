import axios from "axios";
import "./Signup.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupHandler } from "../../Redux Management/features/authSlice/AuthServices";
import { Link, useNavigate } from "react-router-dom";

function SignupComponent() {

    const dispatch = useDispatch()


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { status } = useSelector((state)=>state.authSlice)
    const navigate = useNavigate()


    async function signupButtonHandler() {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password
        }
        try {
            if (firstName.length >=1 && lastName.length >=1 && username.length >=1 && email.length >=1 && password.length >=1 ) {

                dispatch(signupHandler(data)).then(() => {
                setTimeout(() => {
                  navigate("/login");
                }, 500);
              })
            }else{
                alert("please fill all the credentials")

            }

            
            

        } catch (error) {
            console.log(error)

        }
    }


    return (
        <div className="signup-main-div">
            <div className="signup-small-div">
                
                <h2 className="signup-text-div">Sign-<span className="up-text-signup">up</span> </h2>
                <div className="signup-input-div">
                    <fieldset>
                        <legend>FirstName :</legend>
                        <input onChange={(e) => setFirstName(e.target.value)} placeholder="Enter FirstName" type="text" />
                    </fieldset>
                </div>

                <div className="signup-input-div">
                    <fieldset>
                        <legend>LastName :</legend>
                        <input onChange={(e) => setLastName(e.target.value)} placeholder="Enter LastName" type="text" />
                    </fieldset>
                </div>

                <div className="signup-input-div">
                    <fieldset>
                        <legend>Email :</legend>
                        <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" type="text" />
                    </fieldset>
                </div>
                <div className="signup-input-div">
                    <fieldset>
                        <legend>UserName :</legend>
                        <input onChange={(e) => setUserName(e.target.value)} placeholder="Enter UserName" type="text" />
                    </fieldset>
                </div>

                <div className="signup-input-div">
                    <fieldset>
                        <legend>Password :</legend>
                        <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="text" />
                    </fieldset>
                </div>
                <div className="signup-button-div">
                    <button onClick={signupButtonHandler} >Sign up</button>
                </div>

                <div className="signuppage-login-link">
                <h4>Already have an account?</h4>
                <Link  className="Sign-up-here-link" to="/login">Log in here</Link>
                </div>


            </div>

        </div>
    )
}
export { SignupComponent } 