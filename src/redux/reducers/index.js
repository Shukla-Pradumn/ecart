import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { userAuth, userPass } from "./auth";


const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user:userAuth,
  user:userPass,
});
export default reducers;
