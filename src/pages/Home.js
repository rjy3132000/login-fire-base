import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from '../redux/Action/action';


function Home() {

  let {currentUser} = useSelector(state => state.user);
  let dispatch = useDispatch()
  let handleAuth = () => {
    if(currentUser) {
      dispatch(logoutInitiate())
    }
  }



  return (
    <div>
      <h2>Welcome to Our Site</h2>
      <br />
      <button className="btn btn-danger" onClick={handleAuth}>Logout</button>
    </div>
  )
}

export default Home