import React from 'react';

const TodoForm = ({listId, addTodo}) => {
	let input;
	return (
		<li className='collection-item row todo-form'> 
			<input 
				type="text" 
				className="col s10"
				placeholder="Things to do....." 
				ref={node => {input = node;}} 
				onKeyUp={(e) => {
					if(e.keyCode===13){
						addTodo(listId, input.value);
						input.value = "";
					}
				}
			}/>
			<span className="col s2">
				<button 
					type="submit" 
					className="btn-floating btn waves-effect waves-light right light-green accent-4 submit_todo" 
					onClick={() => {
						addTodo(listId, input.value);
						input.value = "";
					}
				}>
					<i className="material-icons right">add</i>
				</button>
			</span>
		</li>
	);
}

module.exports = TodoForm;