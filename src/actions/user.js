import { account } from "../utils/accountsApi";
export const CREATE_USER = "createUser";
export const SIGN_IN = "signIn";
export const UPDATE_INFORMATION = "updateInformation";
export const UPDATE_PHOTO = "updatePhoto";
export const SIGN_OUT = "signOut";
export const HAVE_USER = "haveUser";

export const signIn = (login, password) => dispatch =>
  account
    .signIn(login, password)
    .then(user => dispatch({ type: SIGN_IN, payload: user }));

export const createUser = (login, password, inf) => dispatch =>
  account
    .createUser(login, password, inf)
    .then(user => dispatch({ type: CREATE_USER, payload: user }));

export const haveUser = () => dispatch =>
  account.haveUser().then(user => dispatch({ type: HAVE_USER, payload: user }));

export const updateInformation = inf => dispatch =>
  account
    .updateInformation(inf)
    .then(user => dispatch({ type: UPDATE_INFORMATION, payload: user }));

export const updatePhoto = (photo, user) => dispatch =>
  account
    .updatePhoto(photo, user)
    .then(user => dispatch({ type: UPDATE_PHOTO, payload: user }));

export const signOut = () => dispatch =>
  account.signOut().then(user => dispatch({ type: SIGN_OUT }));
