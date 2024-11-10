import { applyMiddleware, combineReducers, createStore } from "redux";
import { productsReducer } from "./src/reducers/productsReducer";
import { cartReducer } from "./src/reducers/cartReducer";
import { catigoriesReducer } from "./src/reducers/catigoriesReducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  catigories: catigoriesReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))