import { REGISTER_START,REGISTER_SUCCESS, REGISTER_FAIL ,LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL, SET_USER, GOOGLE_START,GOOGLE_SUCCESS,GOOGLE_FAIL } from "./actionType";
import { auth, googleAuthProvider } from "../firebase"
 
// REGISTER

let registerStart = () => ({
    type : REGISTER_START
})


let registerSuccess = (user) => ({
    type : REGISTER_SUCCESS,
    payload : user

})


let registerFail = (error) => ({
    type : REGISTER_FAIL,
    payload : error
})

// LOGIN 

let loginStart = () => ({
    type : LOGIN_START
})


let loginSuccess = (user) => ({
    type : LOGIN_SUCCESS,
    payload : user

})


let loginFail = (error) => ({
    type : LOGIN_FAIL,
    payload : error
})

// lOGOUT

let logoutStart = () => ({
    type : LOGOUT_START
})


let logoutSuccess = () => ({
    type : LOGOUT_SUCCESS,

})


let logoutFail = (error) => ({
    type : LOGOUT_FAIL,
    payload : error
})

// 

export let setUser = (user) => ({
    type : SET_USER,
    payload : user
})

// GOOGLE


let googleSignInStart = () => ({
    type : GOOGLE_START
})


let googleSignInSuccess = (user) => ({
    type : GOOGLE_SUCCESS,
    payload : user

})


let googleSignInFail = (error) => ({
    type : GOOGLE_FAIL,
    payload : error
})







export const registerInitiate = (email, password, diaplayName) => {
    return function (dispatch) {
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email, password).then(({user}) => {
            user.updateProfile({
                diaplayName,
            })
            dispatch(registerSuccess(user))
        }).catch((error)=> dispatch(registerFail(error.message)))
    }
}

// Login Initiate

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        auth
        .signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(loginSuccess(user))
        })
        .catch((error) => dispatch(loginFail(error.message)))
    }
}

// logout Initiate

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        auth
        .signOut()
        .then((resp) => dispatch(logoutSuccess()))
        .catch((error) => dispatch(logoutFail(error.message)))
    }
}

// google initiate

export const googleSignInInitiate = () => {
    return function (dispatch) {
        dispatch(googleSignInStart());
        auth
        .signInWithPopup(googleAuthProvider)
        .then(({ user }) => {
            dispatch(googleSignInSuccess(user))
        })
        .catch((error) => dispatch(googleSignInFail(error.message)))
    }
}