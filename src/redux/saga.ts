import { put, call, fork, takeLatest, delay } from "redux-saga/effects";
import { Actions, ActionsType } from "./actions";
import { dummyService } from "../services";

function* incrementAsyncSaga(action: any) {
  console.log("here");
  let value = action.payload;
  // Place calls to api services here
  // yield call(dummyService, value);
  yield delay(1000);
  yield put(Actions.incrementByAmount(value));
}

export function* incremenAsyncListener() {
  yield takeLatest(ActionsType.INCREMENT_ASYNC, incrementAsyncSaga);
}

export default function* baseSaga() {
  yield fork(incremenAsyncListener);
}
