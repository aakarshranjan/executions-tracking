import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const reduxMiddleware = applyMiddleware(sagaMiddleware);

const rootReducer = combineReducers({});

const store = createStore(rootReducer, reduxMiddleware);
