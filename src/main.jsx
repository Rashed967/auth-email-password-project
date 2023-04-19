import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main';
import Home from './components/Home';
import Order from './components/Order';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './components/AuthProviders';
import Profile from './components/Profile';
import PrivetRoute from './components/layout/PrivetRoute/PrivetRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/order",
        element : <Order></Order>
      },
      {
        path : "/profile",
        element : <PrivetRoute><Profile></Profile></PrivetRoute>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>

  </React.StrictMode>,
)
