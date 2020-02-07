import { combineReducers } from "redux";
import auth from "./auth";
import Product from "./product";
const ecommerceApp = combineReducers({
  auth,
  Product
});
export default ecommerceApp;
