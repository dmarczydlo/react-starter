import {applyMiddleware, createStore, compose} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import worker from './worker';
import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './sites/app';

const composeEnhancers =
    process.env.NODE_ENV === 'development' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({} // eslint-disable-line no-underscore-dangle
        ) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(
    reducers,
    typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : {}, // eslint-disable-line no-underscore-dangle
    enhancer,
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);

if (process.env.NODE_ENV === 'production') {
    worker();
}
