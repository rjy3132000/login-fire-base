import React, { useEffect } from "react";
import "./assets/css/App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRouter from "./components/UserRouter";
import { auth } from "./redux/firebase"
import { setUser } from "./redux/Action/action";

function App() {
  let dispatch = useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=> {
      if (authUser) {
        dispatch(setUser(authUser))
      }
      else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])


  return (
      <BrowserRouter>
        <div className="App">
        <Routes>
          <Route exact path="/" element={<UserRouter Children = {Home}/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/*" element={<h1>Error Page Not Found</h1>}/>
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
