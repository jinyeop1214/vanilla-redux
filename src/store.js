import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
	return {
		type: ADD,
		text,
	};
};

const deleteToDo = (id) => {
	return {
		type: DELETE,
		id: parseInt(id),
	};
};

const save = (state) => {
	localStorage.setItem("todos", JSON.stringify(state));
	return state;
};

const reducer = (
	state = JSON.parse(localStorage.getItem("todos")) || [],
	action
) => {
	switch (action.type) {
		case ADD:
			return save([{ text: action.text, id: Date.now() }, ...state]);
		case DELETE:
			return save(state.filter((toDo) => toDo.id !== action.id));
		default:
			return state;
	}
};
const store = createStore(reducer);

export const actionCreators = {
	addToDo,
	deleteToDo,
};

export default store;
