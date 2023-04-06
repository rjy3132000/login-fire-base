import React, { useState, useEffect } from 'react'
import "../assets/css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { googleSignInInitiate, loginInitiate } from '../redux/Action/action';




function Login() {
  let dispatch = useDispatch()
  let navigate = useNavigate();
  let {currentUser} = useSelector(state => state.user);

  let [state, setState] = useState({
    email: "",
    password : ""
  });

  let { email, password } = state;

  let handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      return
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password : "", })
  }

  useEffect(()=> {
    if(currentUser) {
      navigate("/");
    }
  },[currentUser, navigate])

  let handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate())
  }

  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name] : value })
  }



  return (
    <div id='logreg-forms'>
      <form className='form-signin' onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 font-weight-normal' style={{textAlign:"center"}}>Sign in</h1>
        <div className="social-login">
          <button className='btn google-btn social-btn' type='button' onClick={handleGoogleSignIn}>
            <span><i className="fab fa-google-plus-g"></i> Sign with Google</span>
          </button>
        </div>
        <p style={{textAlign:"center"}}>OR</p>
        <input type="email" name="email" id="inputEmail" className='form-control' placeholder='Email Addesss' onChange={handleChange} value={email} required />
        <input type="password" name="password" id="inputPassword" className='form-control' placeholder='Enter Password' onChange={handleChange} value={password} required />

        <button className="btn btn-secondary btn-block" type='submit'><i className="fas fa-sign-in-alt"></i> Sign In</button>
        <hr />
        <p>Don't have an Account</p>
        <Link to={"/register"}> 
          <button className="btn btn-primary btn-block" type='button' id='btn-signup'><i className="fas fa-user-plus"></i> Sign up New Account</button>
        </Link>
      </form>
    </div>
  )
}

export default Login