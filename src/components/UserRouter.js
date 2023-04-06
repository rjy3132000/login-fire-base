import React from 'react'
import { useSelector } from "react-redux";
import LoadingToRedirect from './LoadingToRedirect';

function UserRouter({ Children, ...rest }) {
    let { currentUser } = useSelector((state) => state.user);
    return currentUser ? <Children /> : <LoadingToRedirect />
}

export default UserRouter