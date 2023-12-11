import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className="row h-100">
                <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center h-100 ">
                
                    <div className="card w-50 rounded-5 bg-dark-subtle" data-bs-theme="dark">
                    
                        <div className="nav nav-underline d-flex p-2 align-items-center justify-content-center fs-3 ">
                            <li class="nav-item">
                                <Link to="/login" className="nav-link p-2 text-center text-primary text-decoration-none">Login </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/register" className="nav-link p-2 text-center text-info  text-decoration-none">Register</Link>
                            </li>
                        </div>
                        <div className="card-body ">
                            <Outlet />
                        </div>
                    </div>

                </div>


                {/* <div className="col-lg-4 d-flex align-items-center justify-content-center h-100 ">
                    <h1 className='title display-4 text-white text-center'>
                        <p className='display-4'>Eat 🍚
                        Sleep 💤</p>
                        <p className='display-3'>Tasks 🎲</p>
                        <span className='display-1'>Repeat ♾️</span>
                    </h1>
                </div> */}
               
            </div>
        </div>
    );
}

export default Home;
