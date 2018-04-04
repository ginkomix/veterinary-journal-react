import { MENU_CHANGE } from "../actions/menu";

const DEFAULT_MENU = "";

export default (state = DEFAULT_MENU, action) => {
  switch (action.type) {
    case MENU_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
