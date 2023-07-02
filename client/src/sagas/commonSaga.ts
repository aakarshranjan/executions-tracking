import { Action } from "redux";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getData } from "../utils/service";
import { FIELDS_URL, PLAYS_URL } from "../utils/constants";
import { loadFieldsAction, loadPlaysAction } from "../actions/dataActions";

function* handleGetPlays(action: Action) {
  try {
    const res = yield call(getData, PLAYS_URL, undefined);
    if (res.status == 200) {
      yield put(loadPlaysAction(res.data));
    }
  } catch (e) {
    console.error("get plays call failed", e);
  }
}

function* watchGetPlays() {
  yield takeLatest("GET_PLAYS", handleGetPlays);
}

function* handleGetFields(action: Action) {
  try {
    const res = yield call(getData, FIELDS_URL, undefined);
    if (res.status == 200) {
      yield put(loadFieldsAction(res.data));
    }
  } catch (e) {
    console.error("get fields call failed", e);
  }
}

function* watchGetFields() {
  yield takeLatest("GET_DYNAMIC_FIELDS", handleGetFields);
}

export default function* commonSaga() {
  yield all([fork(watchGetFields), fork(watchGetPlays)]);
}
