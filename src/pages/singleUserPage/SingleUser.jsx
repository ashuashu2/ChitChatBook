import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { UserCard } from "../../components/componentsIndex";
import "./SingleUser.css"


function SingleUser() {
    const { userId } = useParams()
    const { users } = useSelector((state) => state.userSlice)


    const findUser = (data, id) => {
        return data.find((user) => user._id === id)
    }
    const userData = findUser(users, userId)

    return (
        <div>
            <UserCard userData={userData} />
        </div>


    )
}
export { SingleUser }