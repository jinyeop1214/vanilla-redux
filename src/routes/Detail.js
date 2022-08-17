import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
	const id = useParams().id;
	const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

	return (
		<>
			<h1>{toDo?.text}</h1>
			<h5>{toDo && `Created at: ${toDo?.id}`}</h5>
		</>
	);
}

function mapStateToProps(state, ownProps) {
	// const {
	// 	match: {
	// 		params: { id },
	// 	},
	// } = ownProps;
	// return { toDos: state.find((toDo) => toDo.id === parseInt(id)) };
	return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
