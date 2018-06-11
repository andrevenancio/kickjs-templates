import { fork, all } from 'redux-saga/effects';

import { watchAppRequests } from './app/sagas';

export default function* () {
    yield all([
        fork(watchAppRequests),
    ]);
}
