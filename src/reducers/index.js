import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import enquetesReducer from "../container/enquetes/Reducer";


export default combineReducers({
	form: formReducer,
	enquetesReducer,
});
