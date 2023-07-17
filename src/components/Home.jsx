/* import { useContext } from "react"
import { context } from "../context/authContext" */ //se hace un hook en authContext para no hacer estos import

import { useAuth } from "../context/authContext"

const Home = () => {

    // const authContext = useContext(context) 
    const { user, logOut } = useAuth()

    const handleLogOut = async () => {
        try {
            await logOut()

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="w-full max-w-xs m-auto text-black">
            <div className="bg-red rounded shadow-md px-8 pt-6 pb-8 flex flex-col">
                <h4 className="text-center">🖐 Welcome {user.displayName ? user.displayName : user.email}</h4>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 px-2 rounded focus:outline-none focus:shadow-outline mx-8" onClick={handleLogOut}>Logout</button>
            </div>
        </div>

    )
}

export default Home