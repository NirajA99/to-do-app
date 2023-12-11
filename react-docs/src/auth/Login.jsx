import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContexts from '../contexts/AuthContexts';

function Login(props) {
  const [formData , setFormData] = useState(null);
  const {Login , setMessage ,message} = useContext(AuthContexts);
  const navigate = useNavigate();

  useEffect(()=>{
    setMessage('')
  },[])

  const handleChange = (e) => {
    // console.log(e);
    const {name , value} = e.target;
    setFormData((prev)=>{
      return {...prev, 
        [name] : value}
    });
  }

  const handleClick = (e) =>{
    e.preventDefault();
    Login(formData)
  }

    return (
        <>
        <form>
          <div className="col-lg-12 flex-column d-flex align-items-center justify-content-center">
  <div className="mb-3 col-6">
    <label  className="form-label ">Email address</label>
    <input type="email" className="form-control " name='email'  placeholder='Enter Email'  onChange={handleChange}/>
  </div>
  <div className="mb-3 col-6 ">
    <label  className="form-label">Password</label>
    <input type="password" name='password' className="form-control"  placeholder=' Enter Password' onChange={handleChange} />
  </div>
  </div>
  <br />
  <div className="d-flex align-items-center justify-content-center">
  { message ?
    <p>{message}
  <div class="spinner-border spinner-border-sm p-2" role="status">
</div></p> : ""}</div>
  <div className="d-flex align-items-center justify-content-center">
  <button type="submit" onClick={handleClick} className="btn btn-outline-info m-2">Submit</button>
  <button type="button" onClick={()=> navigate('/register')} className="btn btn-outline-success m-2">Create New Account</button>
  </div>
</form>
</>
    );
}

export default Login;