import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "_reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, loggerMiddleware))
);
