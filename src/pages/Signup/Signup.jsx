import axios from "axios";
import "./Signup.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupHandler } from "../../Redux Management/features/authSlice/AuthServices";
import { useNavigate } from "react-router-dom";

function SignupComponent() {

    const dispatch = useDispatch()


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { status } = useSelector((state)=>state.authSlice)
    const navigate = useNavigate()


    async function signupButtonHandler() {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            Username: userName,
            password: password
        }
        try {

            dispatch(signupHandler(data)).then(() => {
                setTimeout(() => {
                  navigate("/login");
                }, 500);
              })
            

        } catch (error) {
            console.log(error)

        }
    }


    return (
        <div className="signup-main-div">
            <div className="signup-small-div">
                <div className="signup-heading">
                    <h1 className="CC-text-signup">CC</h1>
                    <h2>ChitChat</h2>
                </div>
                <h2 className="signup-text">Sign-up</h2>
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


            </div>

        </div>
    )
}
export { SignupComponent } 