import { useDispatch, useSelector } from "react-redux"
import "./UserDetailModel.css"
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { editUserProfile } from "../../Redux Management/features/authSlice/AuthServices";
import { updateUserDataHandler } from "../../Redux Management/features/authSlice/AuthSlice";


function UserDetailModel({ setIsUpdateModel }) {
    const { userData } = useSelector((state) => state.authSlice);
    const dispatch = useDispatch()
    const [firstName, setfirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [website, setWebsite] = useState(userData.website);
    const [bio, setBio] = useState(userData.bio);
    const [avtarImage, setAvatarImage] = useState(userData.avatarUrl);


    function updateUserDetailsHandler() {

        try {
            dispatch( updateUserDataHandler({  firstName ,lastName , website , bio , avtarImage  }) );

            setIsUpdateModel(false)

        } catch (error) {
            toast.error("something went wrong please try again")
        }


    }

    return (

        <div >
            <div className="updatemodel-editprofile-text-div">
                <h2>Edit Profile</h2>
                <button onClick={() => setIsUpdateModel(false)} className="updatemodel-editprofile-x-button"> X </button>
            </div>
            <hr />

            <div className="updatemodel-editprofile-avatar-div">
                <div className="updatemodel-image-main-div">
                    <div className="updatemodel-image-div">
                        <img className="updatemodel-image" src={ avtarImage ? avtarImage :  userData.avatarUrl } alt="" />
                        <label for="files" className="updatemodel-editprofile-avatar-icon"> <FaCamera /> </label>
                        <input onChange={(e)=> setAvatarImage(URL.createObjectURL(e.target.files[0])) }  accept=".png, .jpg, .jpeg" id="files" style={{ visibility: "hidden" }} type="file" />
                    </div>


                </div>
            </div>

            <fieldset className="fieldset-div" >
                <legend>FirstName :</legend>
                <textarea  value={firstName}   onChange={(e) => setfirstName(e.target.value)} className="update-userdata-textarea" name="" >{userData.firstName}</textarea>
            </fieldset>

            <fieldset className="fieldset-div" >
                <legend>LastName :</legend>
                <textarea  value={lastName}   onChange={(e) => setLastName(e.target.value)} className="update-userdata-textarea" name="" >{userData.lastName}</textarea>
            </fieldset>


            
            <fieldset className="fieldset-div" >
                <legend>Bio :</legend>
                <textarea  value={bio}   onChange={(e) => setBio(e.target.value)} className="update-userdata-textarea" name="" >{userData.bio}</textarea>
            </fieldset >
            <fieldset className="fieldset-div" >
                <legend>Website :</legend>
                <textarea  value={website}   onChange={(e) => setWebsite(e.target.value)} className="update-userdata-textarea" name="" >{userData.website}</textarea>
            </fieldset >
            <div className="update-userdata-button-div">
                <button className="update-userdata-button" onClick={updateUserDetailsHandler}>Update</button>
            </div>






        </div>
    )
}
export { UserDetailModel }