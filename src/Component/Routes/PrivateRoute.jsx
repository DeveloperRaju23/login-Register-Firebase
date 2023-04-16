import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className="radial-progress absolute top-[40%] left-[50%]" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>70%</div>

    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to="/login" replace={true}></Navigate>
            
        </div>
    );
};

export default PrivateRoute;