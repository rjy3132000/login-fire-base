import { combineReducers } from "redux";
import userReducers from "./reducers";


let rootReducers = combineReducers({
    user : userReducers,
})

export default rootReducers;