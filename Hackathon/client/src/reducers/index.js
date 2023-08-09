import { combineReducers } from "redux";

import AuthReducer from "./authReducer";
import ProductReducer from "./productReducer";
import ReviewsReducer from "./reviewsReducer";

export const reducer = combineReducers({ AuthReducer, ProductReducer, ReviewsReducer })