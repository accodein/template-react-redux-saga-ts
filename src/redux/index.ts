import { createStore as createReduxStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import baseSaga from "./saga";
import { counterReducer } from "./reducer";
import { all } from "redux-saga/effects";

const sagaMiddleware: any = createSagaMiddleware();

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createReduxStore(counterReducer, enhancer);

export function* rootSaga() {
  yield all([baseSaga()]);
}
sagaMiddleware.run(rootSaga);
