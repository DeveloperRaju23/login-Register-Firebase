import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success("LogOut Successfully!")
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
      <div className="navbar bg-gray-800	py-6 px-40 md:px-36">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-white text-xl">
            FireBase Auth
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-2xl text-white">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
           <Link to="/profile">Profile</Link>
           
          </ul>
        </div>
        {
            user ? <div>
                <span className="text-white">{user.photoURL}</span> 
                <a onClick={handleLogOut} className="text-white text-2xl cursor-pointer ml-4">Sign Out</a>  
                 </div>  :  <Link to="/login"></Link>
           
        }
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
