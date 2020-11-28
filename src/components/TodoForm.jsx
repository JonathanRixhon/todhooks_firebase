import React, { useState } from 'react'
import firebase from '../utils/firebaseConfig'
function TodoForm(props) {
	const [valueInput, setValueInput] = useState('')
	const handleSubmit = e => {
		//on stoppe le rechargement
		e.preventDefault()

		/*avec firebase*/

		const db = firebase.database().ref('users')
		db.push({
			text: valueInput,
			isCompleted: false,
		})
		setValueInput('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' onChange={e => setValueInput(e.target.value)} />
			<input type='submit' />
		</form>
	)
}
export default TodoForm
