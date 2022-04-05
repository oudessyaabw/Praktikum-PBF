import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux'
import CreateTodo from './containers/CreateTodo';
import Table from './containers/Table';
import MainReducer from './reducers/MainReducer';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>
  f)(createStore)(MainReducer)


ReactDOM.render(
  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();