import isLoggedIn from "./LoginReducer";
import usersDataReducer from "./UsersDataReducer";
import userDetailsReducer from "./UserDetailsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isLoggedIn,
    usersDataReducer,
    userDetailsReducer
});

export default rootReducer;