import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import appReducer from "../reducer/appReducer";

const sagaMiddleware = createSagaMiddleware();

const reduxMiddleware = applyMiddleware(sagaMiddleware);

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, reduxMiddleware);

export default store;
