import React, { useContext } from 'react';
import AuthContexts from '../contexts/AuthContexts';

function Profile(props) {
    const {user } = useContext(AuthContexts);
    
    return (
        <>
        <div className="container-fluid h-50 position-relative">
            <div className='col-lg-12 position-absolute bg-dark top-50 start-50 translate-middle   d-flex flex-column align-items-center justify-content-center h-100 text-white '>
                <h1 className='display-1'> User Profile</h1>
                <br /><br />
            <p className='display-4'>UserName : {user?.name}</p>
            <p className='display-4'>Mail ID : {user?.email}</p>
            <p className='display-4'>User Id : {user?.id}</p>
            </div>
        </div>
   


        </>
    );
}


export default Profile;