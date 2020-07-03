import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App videoSrc='blob:https://t.justdial.com/2998a096-22e2-4cad-948e-5cec4b18874b' />
  </Provider>
  , document.querySelector('.container'));
