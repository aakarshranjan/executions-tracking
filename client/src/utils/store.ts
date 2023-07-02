import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import appReducer from "../reducer/appReducer";
import dataReducer from "../reducer/dataReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reduxMiddleware = applyMiddleware(sagaMiddleware);

const rootReducer = combineReducers({
  app: appReducer,
  data: dataReducer,
});

const store = createStore(rootReducer, reduxMiddleware);

sagaMiddleware.run(rootSaga);

export default store;
