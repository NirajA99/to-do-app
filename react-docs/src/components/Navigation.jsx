import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import AuthContexts from '../contexts/AuthContexts';

function Navigation(props) {
const {user ,setUser} = useContext(AuthContexts);
const navigate = useNavigate();


const logout = () => {
  setTimeout(() => {
  localStorage.removeItem('user');
  setUser(null)  
    navigate('/');
  }, 1000)
  
}


    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
  <div class="container-fluid">
    <img src={logo} alt="user" /> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    
    <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
      { 
      !user ?
      <> 
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        </>
     : 
     <>
        <Link className="nav-link" to="/createtask">Create-Task</Link>
        <Link className="nav-link" to='/tasklist'>TaskList</Link>
        
        <div className="btn-group dropstart">
  <button type="button" className="btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul className="dropdown-menu bg-dark text-white round-2 ">
  <li><Link className="btn btn-outline-secondary  px-5 m-1 " to='/profile'>{user?.name}</Link></li>
  <li><button className="btn btn-outline-danger px-5 m-1" onClick={logout}>Logout</button></li>
  </ul>
</div>
</>
  }
      </div>
  
    </div>

  </div>

    
</nav>

    );
}

export default Navigation;