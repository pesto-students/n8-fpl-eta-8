import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from './reducers/index.js';
import rootSaga from "./saga/index.js";

const sagaMiddleware = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleware),window.devToolsExtension && window.devToolsExtension())
   (createStore)(rootReducer);
sagaMiddleware.run(rootSaga);

export default store;