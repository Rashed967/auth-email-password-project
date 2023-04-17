import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from './firebase.config';

export const AuthContex = createContext(null)
const auth = getAuth(app)

const signUpUser = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
}



const user ={
    signUpUser,
}

const AuthProvider = ({children}) => {
    return (
        <AuthContex.Provider value={user}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;