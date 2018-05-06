import { combineReducers } from "redux";
import hotelsReducer from "./hotelsReducer";

export default combineReducers({
  hotels: hotelsReducer
});
