import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home({ toDos, addToDo }) {
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
				{toDos.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
		</>
	);
}

function mapStateToProps(state, _ownProps) {
	return { toDos: state };
}

function mapDispatchToProps(dispatch, _ownProps) {
	return {
		addToDo: (text) => dispatch(add(text)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
