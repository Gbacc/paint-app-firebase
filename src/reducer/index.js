import { combineReducers } from "redux";
import auth from "./auth";
import paint from "./paint";

const allReducers = combineReducers({
  auth,
  paint
});

export default allReducers;
