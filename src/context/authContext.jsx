import { createContext, useContext, useEffect, useState } from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import {auth} from '../firebase/config'

const authContext = createContext()

export const useAuth = () => { 
    const context = useContext(authContext)
    if(!context) throw new Error ('There is not auth provider')
    return context
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    /* const user = {
        login: true,       //creamos la siguiente arrow function para crear un nuevo usuario
    } */

    const signUp = (email, password) => { 
        // console.log(email, password)  
       const result = createUserWithEmailAndPassword(auth, email, password)
       return result
    }

    const logIn = async (email, password) => { 
        const result = await signInWithEmailAndPassword(auth, email, password)
        return result
     }

    const logOut = async () => await signOut(auth)

    const loginWithGoogle = async () => {
        const googleProvider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth,googleProvider)
        return result
    }
     
     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unSubscribe()
     }, [])
     
    return (
        <authContext.Provider value={{ /* user */ signUp, logIn, user, logOut, loading, loginWithGoogle }}>
            {children}
        </authContext.Provider>
    )
}



