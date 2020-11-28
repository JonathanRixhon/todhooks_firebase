import React, { useState, Fragment, useEffect } from 'react'
import firebase from '../utils/firebaseConfig'
import TodoForm from './TodoForm'
import Todo from './Todo'

function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const db = firebase.database().ref('users')
		db.on('value', snap => {
			const dataDb = snap.val()
			const tempArray = []
			for (let dbSingleElt in dataDb) {
				tempArray.push({ id: dbSingleElt, ...dataDb[dbSingleElt] })
			}
			setTodos(tempArray)
			console.log(tempArray)
			console.log(dataDb)
			// boucler sur 'objet / snapshop renloyé par la DB
		})
	}, [])

	const handleDelete = id => {
		const db = firebase.database().ref('users').child(id)
		db.remove()
	}

	const handleComplete = id => {
		const db = firebase
			.database()
			.ref('users')
			.child(id)
			.update({ isCompleted: true })
	}
	return (
		<Fragment>
			<h1 aria-level='2' role='heading'>
				Todhooks
			</h1>
			<section>
				<h2 aria-level='2' role='heading'>
					Ma liste
				</h2>
				<ul>
					{todos.map(todo => (
						<Todo
							key={todo.id}
							id={todo.id}
							todo={todo}
							deleteTodo={handleDelete}
							completeTodo={handleComplete}
						/>
					))}
				</ul>
				<TodoForm listeTodos={todos} updateTodos={setTodos} />
			</section>
		</Fragment>
	)
}

export default App
