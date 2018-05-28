import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';
import { receiveTodo, receiveTodos } from '../actions/todo_actions';

//testing intial state return
const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

// const initialState = {};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      const newState = merge({}, state);
      newState[action.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
