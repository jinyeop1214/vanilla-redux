import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
	console.log(toDos);
	const [text, setText] = useState("");

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addToDo(text);
		setText("");
	};

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>
				{toDos.reducer.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			{/* <ul>{JSON.stringify(toDos)}</ul> */}
		</>
	);
}

function mapStateToProps(state, _ownProps) {
	return { toDos: state };
}

function mapDispatchToProps(dispatch, _ownProps) {
	return {
		addToDo: (text) => dispatch(actionCreators.addToDo(text)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
