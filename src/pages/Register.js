import React, { useState, useEffect } from 'react'
import "../assets/css/Register.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerInitiate } from '../redux/Action/action';

function Register() {


  let dispatch = useDispatch()
  let navigate = useNavigate();
  let {currentUser} = useSelector(state => state.user);

  let [state, setState] = useState({
    displayName: "",
    email: "",
    password : "",
    passwordConfirm : ""
  });

  let { displayName, email, password, passwordConfirm  } = state;

  useEffect(()=> {
    if(currentUser) {
      navigate("/");
    }
  },[currentUser, navigate])

  let handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return ;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({
      displayName: "",
      email: "",
      password : "",
      passwordConfirm : ""
    })
  }

  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name] : value })
  }




  return (
    <div id='register-form'>
      <form className='form-signup' onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 font-weight-normal' style={{textAlign:"center"}}>Sign UP</h1>
  
        <input type="text" name="displayName" id="displayName" className='form-control' placeholder='Enter Name' onChange={handleChange} value={displayName} required />
        <input type="email" name="email" id="user-email" className='form-control' placeholder='Email Addesss' onChange={handleChange} value={email} required />
        <input type="password" name="password" id="inputPassword" className='form-control' placeholder='Enter Password' onChange={handleChange} value={password} required />
        <input type="password" name="passwordConfirm" id="passwordConfirm" className='form-control' placeholder='Confirm Password' onChange={handleChange} value={passwordConfirm} required />

        <button className="btn btn-primary btn-block" type='submit'><i className="fas fa-user-plus"></i> Sign UP</button>
        <Link to={"/login"} className="back__Login"> <i className="fas fa-angle-left"></i> Back</Link>
      </form>
    </div>
  )
}

export default Register