import {applyMiddleware, createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import worker from './worker';
import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './sites/app';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);

if (process.env.NODE_ENV === 'production') {
    worker();
}
