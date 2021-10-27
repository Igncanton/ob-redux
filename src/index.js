import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppReduxSaga from './AppReduxSaga';
import reportWebVitals from './reportWebVitals';

// Redux Imports:
import { Provider } from 'react-redux';
// Import Config Function of App Store
import { createAppStore, createAppAsyncStore } from './store/config/storeConfig'
 
// We create the App Store
let appStore = createAppStore()
let appAsyncStore = createAppAsyncStore()

ReactDOM.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
