import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"

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
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Your email" onChange={handleChange} required/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Your password" onChange={handleChange} required/>

                <button type="submit">Register</button>

            </form>
            {errors && <p style={{color:'red', fontStyle:'italic', fontSize:'16px'}}>{errors}</p>}
        </div>
    )
}
