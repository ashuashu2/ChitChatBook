import "./Signup.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupHandler } from "../../Redux Management/features/authSlice/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import ashu from "../../images/ashu.jpg"
import { toast } from "react-toastify";
function SignupComponent() {

    const dispatch = useDispatch()


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    async function signupButtonHandler() {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
        }
        try {
            if (firstName.length >= 1 && lastName.length >= 1 && username.length >= 1 && email.length >= 1 && password.length >= 1) {

                dispatch(signupHandler(data)).then(() => {
                    
                    setTimeout(() => {
                        navigate("/login");
                        toast.success("signup succesfully")

                    }, 500);
                })
            } else {
                toast.info("please fill all the credentials")

            }
        } catch (error) {
            console.log(error)
            toast.error("something is not right please try after some times")


        }
    }

    function signupAsGuestButtonHandler() {
        const data = {
            firstName: "Ashutosh",
            lastName: "Birthare",
            email: "ashutoshbirthare.123@gmail.com",
            username: "ashutosh",
            password: "ashu@shu12",
            bio: "Aspiring Frontend Engineer",
            avatarUrl: ashu,
            website: "https://ashutoshportfolios.netlify.app/",
            createdAt: "2022-01-04T10:55:06+05:30",
        }
        try {
            if (data.firstName.length >= 1 && data.lastName.length >= 1 && data.username.length >= 1 && data.email.length >= 1 && data.password.length >= 1) {

                dispatch(signupHandler(data)).then(() => {
                    setTimeout(() => {
                        navigate("/login");
                        toast.success("signup succesfully!")

                    }, 500);

                })
            } else {
                toast.info("please fill all the credentials")

            }
        } catch (error) {
            toast.error("something is not right please try after some times")

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
                <div className="signup-button-div">
                    <button onClick={signupAsGuestButtonHandler} >Sign up As guest</button>
                </div>

                <div className="signuppage-login-link">
                    <h4>Already have an account?</h4>
                    <Link className="Sign-up-here-link" to="/login">Log in here</Link>
                </div>


            </div>

        </div>
    )
}
export { SignupComponent } 