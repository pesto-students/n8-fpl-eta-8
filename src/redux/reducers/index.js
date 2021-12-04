import { combineReducers } from "redux";
import users from "./users";
import challenges from "./challenges";
const rootReducer = combineReducers({
    users,challenges
});

export default rootReducer;