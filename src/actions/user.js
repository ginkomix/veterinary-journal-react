import { account } from "../utils/accountsApi";
export const CREATE_USER = "createUser";
export const SIGN_IN = "signIn";
export const UPDATE_INFORMATION = "updateInformation";
export const UPDATE_PHOTO = "updatePhoto";
export const SIGN_OUT = "signOut";
export const HAVE_USER = "haveUser";

export const userAdd = (login, password, inf) => ({
  type: CREATE_USER,
  payload: account.createUser(login, password, inf)
});

export const signIn = (login, password) => dispatch =>
  account
    .signIn(login, password)
    .then(user => dispatch({ type: SIGN_IN, payload: user }));

export const createUser = dispatch => (login, password, inf) =>
  account
    .createUser(login, password, inf)
    .then(user => dispatch({ type: CREATE_USER, payload: user }));

export const haveUser = dispatch => () =>
  account
    .haveUser()
    .then(user => dispatch({ type: HAVE_USER, payload: { user } }));

export const updateInformation = inf => ({
  type: UPDATE_INFORMATION,
  payload: account.updateInformation(inf)
});
export const updatePhoto = (photo, user) => ({
  type: UPDATE_PHOTO,
  payload: account.updatePhoto(photo, user)
});
export const signOut = () => ({
  type: account.signOut()
});
