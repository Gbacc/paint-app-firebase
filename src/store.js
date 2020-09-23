import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import allReducers from "./reducer/";

const store = createStore(allReducers, applyMiddleware(thunk, promise));

export default store;
