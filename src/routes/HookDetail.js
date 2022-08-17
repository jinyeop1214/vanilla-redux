import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function HookDetail() {
	const id = useParams().id;
	const toDos = useSelector((state) => state);
	const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

	return (
		<>
			<h1>{toDo?.text}</h1>
			<h5>{toDo && `Created at: ${toDo?.id}`}</h5>
		</>
	);
}

export default HookDetail;
