/* import { useContext } from "react"
import { context } from "../context/authContext" */ //se hace un hook en authContext para no hacer estos import

import { useAuth } from "../context/authContext"

const Home = () => {

    // const authContext = useContext(context) 
    const {user, logOut} = useAuth()

    const handleLogOut = async () => { 
       await logOut()
     }
  return (
    <div>Welcome 
        <h4>{user.displayName ? user.displayName : user.email}</h4>
        <button onClick={handleLogOut}>Logout</button>
    </div>
    
  )
}

export default Home