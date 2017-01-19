import React from 'react';

const TodoListForm = ({addTodoList}) => {
	let input;
	return (
		<div className="row">
			<div className="col s11 todo-list-form">
				<input 
					id="name" 
					type="text" 
					placeholder="New List....." 
					ref={node => {input = node;}} 
					onKeyUp={(e) => {
						if(e.keyCode===13){
							addTodoList(input.value);
							input.value = "";
						}
					}
				}/>
			</div>
			<div className="col s1">
				<button 
					id="submit_todo_list" 
					type="submit" 
					className="btn-floating btn waves-effect waves-light right green darken-4" 
					onClick={() => {
						addTodoList(input.value);
						input.value = "";
					}
				}>
					<i className="material-icons right">add</i>
				</button>
			</div>
		</div>
	);
}

module.exports = TodoListForm;