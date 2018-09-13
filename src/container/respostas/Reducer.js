import { RESPOSTA_FETCHING_LIST_SUCCESS, RESPOSTA_FETCHING_LIST_LOADING, RESPOSTA_FETCHING_LIST_FAILURE } from "../../reducers/constants";


const initialState = {
	listRespostas: [],
    isLoading: true,
    failure: false,
};

export default function(state: any = initialState, action: Function) {

	if (action.type === RESPOSTA_FETCHING_LIST_SUCCESS) {
		return {
			...state,
			listRespostas: action.data,
		};
	}
	if (action.type === RESPOSTA_FETCHING_LIST_LOADING) {
		return {
			...state,
			isLoading: action.isLoading,
		};
    }
    if (action.type === RESPOSTA_FETCHING_LIST_FAILURE) {
		return {
			...state,
			failure: action.failure,
		};
	}

	return state;
}
