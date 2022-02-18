import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const userAuth = (user) => {
  return {
    type: ActionTypes.USER_AUTH,
    payload: user,
  };
};
export const userPass = (pass) => {
  return {
    type: ActionTypes.USER_PASS,
    payload: pass,
  };
};