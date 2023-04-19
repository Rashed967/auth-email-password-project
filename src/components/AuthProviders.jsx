import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase/firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [newUser, setNewUser] = useState(null)


    const signUpHandle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSign = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setNewUser(currentUser)
        })
        return() => {
            unsubscribe()
        }
    }, [])

    const user = {
        signUpHandle,
        handleSign,
        logOut,
        newUser
    }


    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;