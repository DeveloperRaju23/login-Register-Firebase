import React, { useContext, useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { EyeIcon , EyeSlashIcon } from '@heroicons/react/24/solid'
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
const [type, setType] = useState('password')
const [icon, setIcon] = useState(EyeSlashIcon)
const [success , setSuccess] = useState()
const {signIn} = useContext(AuthContext)

const handleToggle =() => {
    console.log(handleToggle)
    if(type === 'password'){
        setIcon(EyeSlashIcon)
        setType('text')
    }
    else{
        setIcon(EyeIcon)
        setType('password')
    }
}
    const handleOnsubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            toast.success("Login Successfully!")
            console.log(loggedUser)
            form.reset();

        })
        .catch(error => {
            console.log(error)
            toast.error("Password Wrong..");
        })

    }
  return (
    <div>
      <form onSubmit={handleOnsubmit} class="form shadow-xl">
        <div class="header">Login </div>
        <div class="inputs relative">
          <input placeholder="Email" className="input" type="email" name="email" required />
          <input placeholder="Password" className="input " name="password" type={type} required />
           <span > <EyeIcon onClick={handleToggle}  icon={icon} className="w-6 h-6 text-emerald-500 cursor-pointer absolute top-[28%] right-[12%]"></EyeIcon></span>
          <div class="checkbox-container">
            <label class="checkbox">
              <input type="checkbox" id="checkbox" />
            </label>
            <label for="checkbox" class="checkbox-text">
              Remember me
            </label>
          </div>
          <button class="sigin-btn">Login</button>
          <a class="forget" href="#">
            Forget password ?
          </a>
            <p class="signup-link">
            Don't have an account?  <Link to="/register"><a href="#">Sign up</a></Link> 
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
