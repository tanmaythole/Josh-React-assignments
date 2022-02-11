import isLoggedIn from "./LoginReducer";
import usersDataReducer from "./UsersDataReducer";
import userDetailsReducer from "./UserDetailsReducer";
import blogsReducer from "./BlogsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isLoggedIn,
    usersDataReducer,
    userDetailsReducer,
    blogsReducer
});

export default rootReducer;