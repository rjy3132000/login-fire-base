import { REGISTER_START,REGISTER_SUCCESS, REGISTER_FAIL ,LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL, SET_USER, GOOGLE_START,GOOGLE_SUCCESS,GOOGLE_FAIL } from "../Action/actionType"


let initialState = {
    loading : false,
    currentUser : null,
    error : null
}


let userReducers = (state = initialState, action) => {
    switch(action.type) {

        case REGISTER_START:
        case LOGIN_START:
        case LOGOUT_START:
        case GOOGLE_START:
            return {
                ...state,
                loading : true
            }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case GOOGLE_SUCCESS:
            return {
                ...state,
                currentUser : action.payload,
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser : null
            }

        case SET_USER:
            return {
                ...state,
                loading : false,
                currentUser : action.payload
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case GOOGLE_FAIL:
            return{
                ...state,
                loading : false,
                error : action.payload,
            }


        default:
            return state;
    }
}


export default userReducers;