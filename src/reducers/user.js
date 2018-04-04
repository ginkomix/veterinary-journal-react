import { USER } from "../actions/user";

const DEFAULT_USER = null;

export default (store = DEFAULT_USER, action) => {
  switch (action.type) {
    case USER:
      return action.payload;
    default:
      return store;
  }
};
