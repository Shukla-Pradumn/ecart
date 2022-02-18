import { ActionTypes } from "../constants/action-types";
const intialState = {
  userDetails: [{email:"", password:""}],
};

export const userAuth = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_AUTH:
      return { ...state, userDetails: payload.users };
    default:
      return state;
  }
};
export const userPass = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_AUTH:
      return { ...state, userDetails: payload.users };
    default:
      return state;
  }
};