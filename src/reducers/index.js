import { combineReducers } from 'redux';
import counter from './counter';
import form from './form';

const reducers = combineReducers({
    counter,
    form
});

export default reducers;
