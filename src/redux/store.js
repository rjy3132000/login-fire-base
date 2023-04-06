import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from "./Reducers";

let middleware = [thunk];
if(process.env.NODE_ENV === "development") {
    middleware.push(logger)
}

export let store = createStore(rootReducers, applyMiddleware(...middleware));