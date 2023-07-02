import { all, fork } from "redux-saga/effects";
import * as authSaga from "./authSaga";
import * as commonSaga from "./commonSaga";

export default function* rootSaga() {
  yield all(
    [...Object.values(authSaga), ...Object.values(commonSaga)].map(fork)
  );
}
