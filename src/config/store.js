import { createStore,applyMiddleware  } from "redux";
import reducer from "../reducers";
import { dispath } from '../middleware/dispath'

const store = createStore(reducer,applyMiddleware(dispath));
export default store;
