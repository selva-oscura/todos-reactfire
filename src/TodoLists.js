import React from 'react';
import TodoList from './TodoList';

const TodoLists = ({todoLists, check, remove, addTodo}) => {
  const todoListArr = todoLists.map((todoList) => {
    return(<TodoList todoList={todoList} key={todoList.listId} remove={remove} check={check} addTodo={addTodo} />);
  })
  return (
    <div className="row">
      {todoListArr}
    </div>
  )
}

module.exports = TodoLists;