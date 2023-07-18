import { useState } from "react"
import { Alert } from "./Alert"
import { useNavigate } from "react-router-dom"

export const RecoverPassword = () => {
    const [user, setUser] = useState({
        email: '',
    })

    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/')
    }

  return (
    <div className="w-full max-w-xs m-auto">
    <h1 className="text-center">Recover Password</h1>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* {errors && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '16px' }}>{errors}</p>} */}
        {/* Otra forma de pasar los errores */}
        {errors && <Alert message={errors} />}
        <div className="mb-4">
            <label className="block" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Your email" onChange={handleChange} required />
        </div>


        <div className="flex flex-col">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign In</button>
        </div>
    </form>

</div>
  )
}
