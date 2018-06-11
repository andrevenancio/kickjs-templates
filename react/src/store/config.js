import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import rootReducer from './reducers';
import rootSaga from './sagas';

const USE_DEV_TOOLS = global.devToolsExtension;
if (USE_DEV_TOOLS) installDevTools(Immutable);

export default (options = {}) => {
    const {
        initialState = {},
    } = options;

    const middlewares = [];

    // adds saga middleware
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    const createReduxStore = USE_DEV_TOOLS
        ? compose(applyMiddleware(...middlewares), global.devToolsExtension())
        : compose(applyMiddleware(...middlewares));

    const store = createReduxStore(createStore)(rootReducer, initialState);
    store.runSaga = sagaMiddleware.run;

    store.runSaga(rootSaga);
    return store;
};
