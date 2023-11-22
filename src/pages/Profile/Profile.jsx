import { useSelector } from "react-redux"
import { UserCard } from "../../components/componentsIndex"


function Profile() {
     const { userData } = useSelector((state)=>state.authSlice)



    return (
        <div>
            <UserCard userData={userData} />
        </div>

    )
    
}
export { Profile }