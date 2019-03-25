import { createStore, applyMiddleware } from "redux";

import RankReducer from "store/reducers/rank";
import thunk from "redux-thunk";

export const store = createStore(RankReducer, applyMiddleware(thunk));