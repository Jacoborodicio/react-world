import { call, put, takeLatest, all } from "redux-saga/effects";
import { globalTodo } from "../../constants/requests";
import * as constants from '../constants/action-types';

export function* fechToDo() {
    try {
        const response = yield call(globalTodo);
        console.log("Esta es la respuesta en Sagas: ", response);
        yield put({type: constants.SECOND_ACTION});

    } catch (err) {
        console.log("error en sagas", err)
    }
}

function* actionWatcher() {
    yield takeLatest(constants.INITIAL_ACTIONS, fechToDo)
}
export default function* rootSaga() {
  yield all([
  actionWatcher(),
  ]);
}