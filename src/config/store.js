import { createStore,applyMiddleware  } from "redux";
import reducer from "../reducers";
import { vanillaPromise  } from '../middleware/vanillaPromise '

const store = createStore(reducer,applyMiddleware(vanillaPromise ));
export default store;
