import { combineReducers } from "redux";
import users from "./users";
const rootReducers = combineReducers({
  counter: users,
});
export default rootReducers;
