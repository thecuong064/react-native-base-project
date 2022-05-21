import {all, fork} from 'redux-saga/effects';
import imageSagas from './imageSagas';

export function* rootSaga() {
  yield all([fork(imageSagas)]);
}
