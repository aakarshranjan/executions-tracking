import { Action } from "redux";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getData } from "../utils/service";
import { LOGIN_EMP_URL } from "../utils/constants";
import { toggleLoginStatusAction } from "../actions/appActions";
import { getFieldsAction, getPlaysAction } from "../actions/dataActions";

function* handleLoginEmployee(action: Action) {
  console.log("as");
  try {
    const res = yield call(getData, LOGIN_EMP_URL, undefined);
    if (res.status == 200) {
      yield put(getPlaysAction());
      yield put(getFieldsAction());
      yield put(toggleLoginStatusAction());
    }
  } catch (e: unknown) {
    console.error("Something went wrong! Login Failed", e);
  }
}

function* watchLoginEmployee() {
  yield takeLatest("LOGIN_EMPLOYEE", handleLoginEmployee);
}

export default function* authSaga() {
  yield all([fork(watchLoginEmployee)]);
}
