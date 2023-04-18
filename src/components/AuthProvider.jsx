import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';

export const AuthContex = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {


const signUpUser = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
        
    })
},[])


const user ={
    signUpUser,
    signInUser
}


    return (
        <AuthContex.Provider value={user}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;