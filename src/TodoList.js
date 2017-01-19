import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = ({todoList, check, remove, addTodo}) => {
  const todos = todoList.items;
  let pendingList;
  if(todos.length>0){
    pendingList = todos.map((todo) => {
      if(!todo.checked){
        return (<Todo todo={todo} key={todo.todoId} listId={todoList.listId} remove={remove} check={check} />);
      }
    });
  }else{
    pendingList = null;
  }
  let doneList;
  if(todos.lenth>0){
    doneList = todos.map((todo) => {
      if(todo.checked){
        return (<Todo todo={todo} key={todo.todoId} listId={todoList.listId} remove={remove} check={check} />);
      }
    });
  }else{
    doneList=null;
  }
  return (
    <div className="col s12 m6 l4">
      <h3>{todoList.name}</h3>
      <ul className="collection">
        {pendingList}
        {doneList}
        <TodoForm listId={todoList.listId} addTodo={addTodo} />
      </ul>
    </div>
  )
}

module.exports = TodoList;