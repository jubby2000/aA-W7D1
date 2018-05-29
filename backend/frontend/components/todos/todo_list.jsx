import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }
  // todos,receiveTodo
  render(){
    return(
      <div>
        <ul>
          {this.props.todos.map((todo) => <TodoListItem key={todo.id} item={todo} />)}
        </ul>
        <TodoForm  receiveTodo={this.props.receiveTodo}/>
      </div>
      );
  }
}

export default TodoList;
