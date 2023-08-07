import { combineReducers } from "redux";

import AuthReducer from "./authReducer";
import ProductReducer from "./productReducer";

export const reducer = combineReducers({ AuthReducer, ProductReducer })