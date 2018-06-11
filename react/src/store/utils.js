import { fromJS } from 'immutable';

export const makeStateImmutable = (state) => {
    const immutableState = {};
    Object.keys(state).forEach((key) => {
        if (key === 'routing') {
            immutableState[key] = state[key];
        } else {
            immutableState[key] = fromJS(state[key]);
        }
    });

    return immutableState;
};
