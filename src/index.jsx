import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './sites/app';


const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
