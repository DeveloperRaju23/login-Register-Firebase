import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main';
import Home from './Component/Layout/Home';
import Login from './Component/Layout/Login';
import Register from './Component/Layout/Register';
import AuthProviders from './Component/Providers/AuthProviders';
import About from './Component/Layout/About';
import PrivateRoute from './Component/Routes/PrivateRoute';
import Profile from './Component/Layout/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>   ,
      },
      {
        path: "/about",
        element: <PrivateRoute><About></About></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>,
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
