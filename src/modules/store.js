import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";

import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, composeWithDevTools());
  return store;
}
