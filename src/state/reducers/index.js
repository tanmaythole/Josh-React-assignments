import isLoggedIn from "./LoginReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({isLoggedIn});

export default rootReducer;