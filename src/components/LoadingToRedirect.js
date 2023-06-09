import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoadingToRedirect() {

    let [count , setCount] = useState(5)
    let navigate = useNavigate();

    useEffect(()=> {
        let interval = setInterval(() => {
          setCount((currentCount) => --currentCount)
        }, 1000);
        count === 0 && navigate("/login") ;
        return () => clearInterval(interval);
    },[count, navigate])

  return (
    <div>
        <p>Redirecting You in { count } seconds</p>
    </div>
  )
}

export default LoadingToRedirect