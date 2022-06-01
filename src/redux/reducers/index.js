import { productReducer } from "./ProductReducer";
import { combineReducers } from "redux";

export let reducers = combineReducers({
  store: productReducer,
});
