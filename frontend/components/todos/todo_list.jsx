import React from 'react';

const TodoList = ({todos}) => {
return(
  <ul>
    {todos.map(item => <TodoListItem item={item} />}
  </ul>
  );
};

export default TodoList;
