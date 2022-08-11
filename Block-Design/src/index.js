import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css';
import { Provider } from 'react-redux'; //keep track of the Store AKA Global State to access the store from anywhere inside the app
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './custom.scss';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
