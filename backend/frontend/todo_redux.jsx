import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import { receiveTodo, receiveTodos} from './actions/todo_actions';
import { allTodos } from './reducers/selectors.js';
import {fetchTodos} from './util/todo_api_util.js';

// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;
// window.allTodos = allTodos;
window.fetchTodos = fetchTodos;

document.addEventListener("DOMContentLoaded", ()=>{
  const rootEl = document.getElementById("content");
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={ store } />, rootEl);
});
