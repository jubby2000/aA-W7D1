import React from 'react';
import { uniqueId } from '../../util/utils.js';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: '',
      title: '',
      body: ''
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.receiveTodo({id: uniqueId(),title: this.state.title, body: this.state.body});
    this.setState({id: uniqueId(),title: '', body: ''});
  }

  handleChange(form){
    return (event) => {
      event.preventDefault();
      this.setState({[form]: event.target.value});
    };
}

  render() {
    return (
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" onChange={this.handleChange("title")} value={this.state.title}></input>
        <label htmlFor="body">Body: </label>
        <input type="text"id="body" onChange={this.handleChange("body")} value={this.state.body}></input>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;
