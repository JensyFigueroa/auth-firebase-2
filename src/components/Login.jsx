import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState()

    const {logIn, loginWithGoogle} = useAuth();
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => { 
        e.preventDefault()
        try {
            await logIn(user.email, user.password)
            navigate('/')
        } catch (error) {
             setErrors(error.code)
        } 
     }

     const handleSubmitWithGoogle = async ( ) => { 
        await loginWithGoogle()
        navigate('/')
      }
     
    return (
        <div>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit} className="flex flex-col mx-20">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Your email" onChange={handleChange} required/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Your password" onChange={handleChange} required/>

                <button type="submit">SignIn</button>
                <hr />
                <button onClick={handleSubmitWithGoogle}>with Google</button>

            </form>
            {errors && <p style={{color:'red', fontStyle:'italic', fontSize:'16px'}}>{errors}</p>}
        </div>
    )
}
