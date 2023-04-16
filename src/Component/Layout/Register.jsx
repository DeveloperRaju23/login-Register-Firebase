import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { EyeIcon , EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
const {user, createUser} = useContext(AuthContext)
const [error , setError] =  useState('')
console.log(createUser)
const [type, setType] = useState('password')
const [icon, setIcon] = useState(EyeSlashIcon)
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

    const handleOnRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        setError('')
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Please add to least Two Uppercase')
            return;
        }else if(password.length < 8){
            setError("Please Must be 8 Characters long")
            return;
        }


        createUser(email, password)
        .then(result => {
            toast.success("Register Successfully!")
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
        })
        .catch(error => {
            console.log(error)
            toast.error("Already Email Submit")
        })
    }
    return (
        <div>
      <form onSubmit={handleOnRegister} class="form shadow-xl">
        <div class="header">Register</div>
        <div class="inputs relative">
        <input placeholder="Name" class="input" type="text" name="name" required />
          <input placeholder="Email" class="input" type="text" name="email" required />
          <input placeholder="Password" className="input " name="password" type={type} required />
           <span > <EyeIcon onClick={handleToggle} icon={icon} className="w-6 h-6 cursor-pointer absolute top-[36%] right-[12%]"></EyeIcon></span>
           <p className='text-orange-600 text-lg'>{error}</p>
          <div class="checkbox-container">
            <label class="checkbox">
              <input type="checkbox" id="checkbox" />
            </label>
            
            <label for="checkbox" class="checkbox-text">
              Remember me
            </label>
          </div>
          <button class="sigin-btn">Register</button>
          <a class="forget" href="#">
            Forget password ?
          </a>
        
        <p class="signup-link">
            Already have an Account? <Link to="/login"><a href="#">Login</a></Link> 
          </p>
       
        </div>
        <ToastContainer />
      </form>
    </div>
    );
};

export default Register;