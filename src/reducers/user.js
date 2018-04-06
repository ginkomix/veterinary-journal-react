import {
  CREATE_USER,
  SIGN_IN,
  UPDATE_INFORMATION,
  UPDATE_PHOTO,
  SIGN_OUT,
  HAVE_USER
} from "../actions/user";

const DEFAULT_USER = null;

export default (store = DEFAULT_USER, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case SIGN_IN:
      return action.payload;
    case UPDATE_INFORMATION:
      return action.payload;
    case HAVE_USER:
      return action.payload;
    case UPDATE_PHOTO:
      return action.payload;
    case SIGN_OUT:
      return null;
    default:
      return store;
  }
};
