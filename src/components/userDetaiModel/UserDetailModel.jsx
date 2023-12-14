import { useDispatch, useSelector } from "react-redux"
import "./UserDetailModel.css"
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { editUserProfile } from "../../Redux Management/features/authSlice/AuthServices";


function UserDetailModel({ setIsUpdateModel }) {
    const { userData, token } = useSelector((state) => state.authSlice);
    const dispatch = useDispatch()
    const [website, setWebsite] = useState(userData.website);
    const [bio, setBio] = useState(userData.bio);
    const [firstName, setfirstName] = useState(userData.firstName);

    function updateUserDetailsHandler() {

        try {
            dispatch(
                editUserProfile({ userDetails: { firstName, website, bio }, token })

            );
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
                        <img className="updatemodel-image" src={userData.avatarUrl && userData.avatarUrl} alt="" />
                        <label for="files" className="updatemodel-editprofile-avatar-icon"> <FaCamera /> </label>
                        <input accept=".png, .jpg, .jpeg" id="files" style={{ visibility: "hidden" }} type="file" />
                    </div>


                </div>
            </div>

            <fieldset className="fieldset-div" >
                <legend>Name :</legend>
                <textarea onChange={(e) => setfirstName(e.target.value)} className="update-userdata-textarea" name="" >{userData.firstName}</textarea>
            </fieldset>


            <fieldset className="fieldset-div">
                <legend>Username :</legend>
                <textarea onChange={(e) => setUpdatedData((oldData) => ({ ...oldData, username: e.target.value }))} className="update-userdata-textarea" name="" >{userData.username}</textarea>
            </fieldset>
            <fieldset className="fieldset-div" >
                <legend>Bio :</legend>
                <textarea onChange={(e) => setBio(e.target.value)} className="update-userdata-textarea" name="" >{userData.bio}</textarea>
            </fieldset >
            <fieldset className="fieldset-div" >
                <legend>Website :</legend>
                <textarea onChange={(e) => setWebsite(e.target.value)} className="update-userdata-textarea" name="" >{userData.website}</textarea>
            </fieldset >
            <div className="update-userdata-button-div">
                <button className="update-userdata-button" onClick={updateUserDetailsHandler}>Update</button>
            </div>






        </div>
    )
}
export { UserDetailModel }