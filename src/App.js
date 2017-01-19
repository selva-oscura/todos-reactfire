import React from 'react';
import Title from './Title';
import TodoListForm from './TodoListForm';
import TodoLists from './TodoLists';
window.listId = 0;
window.todoId = 0;


class App extends React.Component{
  constructor(props){
    // pass props to parent class
    super(props);
    // set initial state
    this.state = {
      data: []
    }
  }

  // add list handler
  addTodoList(value){
    // get data
    const list = {name: value, listId: window.listId++, items:[]}
    // update data with new list
    this.state.data.push(list);
    // update state
    this.setState({data: this.state.data});
  }

  // add todo handler
  addTodo(listId, value){
    // get data
    const todo = {text: value, listId: listId, todoId: window.todoId++, checked:false}
    this.state.data.forEach(function(list, i){
      // select proper list
      if(list.listId===listId){
        // add new todo to that list
        list.items.push(todo);
      }
    });
    // update data
    this.setState({data: this.state.data});
  }

  // handle remove
  removeTodo(listId, todoId){
    // get data
    const data = this.state.data;
    data.forEach(function(list, i){
      // select proper list
      if(list.listId===listId){
        var updatedList = {
          name: list.name,
          listId: list.listId
        };
        // Filter all todos except the one to be removed for selected list
        updatedList.items = list.items.filter((todo) => {
          if(todo.todoId !== todoId) return todo;
        });
        // replace old selected list with updated list
        data[i] = updatedList;
      }
    })
    // update state with filter
    this.setState({data: data});
  }
  toggleChecked(listId, todoId){
    // get data
    var data = this.state.data;
    data.forEach(function(list){
      // select proper list
      if(list.listId===listId){
        list.items.map((todo) => {
          // update selected todo in selected list
          if(todo.todoId===todoId) todo.checked = !todo.checked;
          return todo;
        })
      }
    })
    // update data
    this.setState({data: data});
  }
  render(){ 
    return (
      <div>
        <Title />
        <TodoListForm addTodoList={this.addTodoList.bind(this)} />
        <TodoLists 
          todoLists={this.state.data}
          remove={this.removeTodo.bind(this)}
          check={this.toggleChecked.bind(this)}
          addTodo={this.addTodo.bind(this)}
        />
      </div>
    )
  }
};

export default App;