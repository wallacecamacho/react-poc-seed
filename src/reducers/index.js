import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import enquetesReducer from "../container/enquetes/Reducer";
import respostasReducer from "../container/respostas/Reducer";


export default combineReducers({
	form: formReducer,
	enquetesReducer,
	respostasReducer,
});
