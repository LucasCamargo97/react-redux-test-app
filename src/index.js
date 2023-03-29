import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import allReducers from './reducers/index'
import {  Provider  } from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
