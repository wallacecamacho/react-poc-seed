import { ENQUETE_FETCHING_LIST_SUCCESS, ENQUETE_FETCHING_LIST_LOADING, ENQUETE_FETCHING_LIST_FAILURE, ENQUETE_TOTAL_FETCHING_LIST_SUCCESS  } from "../../reducers/constants";


const initialState = {
	listEnquetes: [],
	listEnquetesTotais: [],
    isLoading: true,
    failure: false,
};

export default function(state: any = initialState, action: Function) {

	if (action.type === ENQUETE_FETCHING_LIST_SUCCESS) {
		return {
			...state,
			listEnquetes: action.data,
		};
	}
	if (action.type === ENQUETE_FETCHING_LIST_LOADING) {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	if (action.type === ENQUETE_TOTAL_FETCHING_LIST_SUCCESS) {
		return {
			...state,
			listEnquetesTotais: action.data,
		};
    }	
    if (action.type === ENQUETE_FETCHING_LIST_FAILURE) {
		return {
			...state,
			failure: action.failure,
		};
	}

	return state;
}
