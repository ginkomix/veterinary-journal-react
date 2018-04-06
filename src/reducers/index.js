import { combineReducers } from "redux";
import item from "./item";
import sort from "./sort";
import filter from "./filter";
import contextMenu from "./contextMenu";
import startForm from "./startForm";
import menu from "./menu";
import { routerReducer } from "react-router-redux"; // ???
import user from "./user";
import inputError from "./inputError";
import fileLoadSrc from "./fileLoadSrc";

export default combineReducers({
  routing: routerReducer, // ???
  item,
  sort,
  filter,
  contextMenu,
  startForm,
  menu,
  user,
  inputError,
  fileLoadSrc
});
