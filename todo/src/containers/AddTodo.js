import React from 'react'

import { connect } from 'react-redux'

import { addTodo } from '../actions'

let AddTodo = ({ dispatch, add }) => {
	let input
	return (
		<div>
			<button onClick={()=> {add()}} />
		</div>
	)
}

function mapStateToProps(state){
	return {
		count: state.count
	}
}
function mapDispatchToProps(dispatch){
	return {
		add: function(state){
			console.log(state);
		}
	}
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
export default AddTodo