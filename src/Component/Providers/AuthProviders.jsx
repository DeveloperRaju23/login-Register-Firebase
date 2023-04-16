import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProviders = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading , setLoading] = useState(true)
 
   const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) => {
      return  signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () => {
    return signOut(auth)
   }

   useEffect( () => {
   const unsubscribe =  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    console.log(currentUser)
    setLoading(false)
    });
    return()=> {
        unsubscribe();
    }
   },[])
    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;