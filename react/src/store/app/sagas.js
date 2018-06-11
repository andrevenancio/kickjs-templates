import {
    put,
    takeLatest,
} from 'redux-saga/effects';

import {
    APP_INIT,
    APP_READY,
} from './actions';

function* sagaAppInit() {
    const response = yield fetch('./config.json');
    const json = yield response.json();

    // do whatever you need before page load
    console.log(json);

    // everything is loaded
    yield put({ type: APP_READY, ready: true });
}

export function* watchAppRequests() {
    yield takeLatest(APP_INIT, sagaAppInit);
}
