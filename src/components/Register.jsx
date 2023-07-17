import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate, Link } from "react-router-dom"
import { Alert } from "./Alert"

export const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState()

    const {signUp} = useAuth();
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => { 
        e.preventDefault()
        try {
          await signUp(user.email, user.password)
            navigate('/')
        } catch (error) {
            setErrors(error.code)
        }
     }

     
    return (
        <div className="w-full max-w-xs m-auto">
            <h1 className="text-center">SignUp</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* {errors && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '16px' }}>{errors}</p>} */}
                {/* Otra forma de pasar los errores */}
                {errors && <Alert message={errors} />}
                <div className="mb-4">
                    <label className="block" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Your email" onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block" htmlFor="password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" placeholder="Your password" onChange={handleChange} required />
                </div>

                <div className="mb-4" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                   <span className="text-xs italic ">I already have an account</span> <Link to='/login' className="text-blue-700 italic" >SignIn</Link>
                </div>

                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">SignUp</button>
            </form>

        </div>
    )
}
