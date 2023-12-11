import React, { useContext, useState } from 'react';
import AuthContexts from '../contexts/AuthContexts';

function Register(props) {
  const {Register, message} = useContext(AuthContexts);
  const [formData, setFormData] = useState();
  
 


  const handleChange = (e) => {
    
        let {name , value} = e.target;
        //  let data ={[name] : value}
         
        setFormData((prev) => 
            ({
              ...prev , [name] : value
            })
        )
  }

  const handleClick = (e) => {
    e.preventDefault();
    Register(formData);
  }


    return (
        <form>
          <div className="col-lg-12  flex-column d-flex align-items-center justify-content-center">
        <div className="mb-3 col-6">
    <label className="form-label">Enter Username</label>
    <input type="text" className="form-control" name='name' placeholder='Enter Username' onChange={handleChange} />
  </div>
  
  
  <div className="mb-3 col-6">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  name='email' placeholder='Enter Email' onChange={handleChange} />
  </div>
  <div className="mb-3 col-6">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' placeholder='Enter Password' onChange={handleChange} />
  </div>
  <div className="d-flex align-items-center justify-content-center">
  { message ?
    <p>{message}
  <div class="spinner-border spinner-border-sm p-2" role="status">
</div></p> : ""}</div>
    <div className="d-flex align-items-center justify-content-center">
  <button type="submit" className="btn btn-outline-primary m-2 " onClick={handleClick}>Submit</button>
  <button type="reset" className="btn btn-outline-danger m-2 " >Reset</button>
  </div>
  </div>
</form>
    );
}

export default Register;