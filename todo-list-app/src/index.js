// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducer/reducer';
import { listTasks } from './actionCreators/actions';
import App from './App';

const store = createStore(taskReducer);

const initialState = {
  tasks: [] 
};

store.dispatch(listTasks(initialState.tasks));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

