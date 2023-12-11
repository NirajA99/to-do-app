import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const navigate = useNavigate(null)

    useEffect(()=>{
        const checkUser = localStorage.getItem('user');
        const getUser = JSON.parse(checkUser);
    if(!getUser){
        setIsLoggedIn(true);
        navigate('/');
        
    }
    setIsLoggedIn(false)
    },[])
    
    
    return (
        <>
        {
            isLoggedIn ? children : null
        }
        </>
    );
}

export default ProtectedRoute;