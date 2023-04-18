import React, { useContext, useState } from 'react';
import {getAuth} from "firebase/auth"
import app from './firebase.config';
import { AuthContex } from './AuthProvider';

const Login = () => {

    const {signInUser, allUser} = useContext(AuthContex)
    console.log(allUser)


    
    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        signInUser(email, password)
        .then( (result) => {
          const loggedUser = result.user;
        }) 
        .catch( (error) => {console.error(error)})
        form.reset()
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-center my-4 text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;