import { FILE_LOAD_SRC } from "../actions/fileLoadSrc";

const DEFAULT_SRC = null;

export default (state = DEFAULT_SRC, action) => {
  switch (action.type) {
    case FILE_LOAD_SRC:
      return action.src;
    default:
      return state;
  }
};
