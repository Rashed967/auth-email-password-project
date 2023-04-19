import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {newUser} = useContext(AuthContext)
    if(newUser){
        return children
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivetRoute;