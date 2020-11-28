import React from 'react'

export default function Todo(props) {
	return (
		<li
			style={{
				textDecoration: props.todo.isCompleted ? 'line-through' : 'none',
			}}>
			{props.todo.text}
			<button
				onClick={() => {
					props.deleteTodo(props.todo.id)
				}}>
				Delete
			</button>
			<button
				onClick={() => {
					props.completeTodo(props.todo.id)
				}}>
				Complete
			</button>
		</li>
	)
}
/* style={{
	textDecoration: props.task.isCompleted ? 'line-through' : 'none',
}} */
