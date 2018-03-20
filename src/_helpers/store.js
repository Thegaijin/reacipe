import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../_reducers/rootReducer';

// const loggerMiddleware = createLogger();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));
