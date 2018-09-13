import resources  from "./Resources";
import { ENQUETE_FETCHING_LIST_SUCCESS, ENQUETE_FETCHING_LIST_FAILURE, ENQUETE_FETCHING_LIST_LOADING, ENQUETE_TOTAL_FETCHING_LIST_SUCCESS } from "../../reducers/constants";


export function listIsLoading(bool: boolean) {
	return {
		type: ENQUETE_FETCHING_LIST_LOADING,
		isLoading: bool,
	};
}

 export function getDataSuccess(data) {
	return {
		type: ENQUETE_FETCHING_LIST_SUCCESS,
		data,
	};
  }

  export function getDataSuccessTotal(data) {
	return {
		type: ENQUETE_TOTAL_FETCHING_LIST_SUCCESS,
		data,
	};
  }

  export function getDataFailure(bool: boolean) {
	return {
        type: ENQUETE_FETCHING_LIST_FAILURE,
        failure: bool,
	};
  }


export function fetchList(param: any) {
	return dispatch => {
		const resource = new resources();

		fetch(resource.fetchEnquete(), {
			method: 'get',
			mode: 'cors'
			}).then(response => response.json())
			.then(result => {
				dispatch(getDataSuccess(result));
				dispatch(listIsLoading(true));
			return fetch(resource.fetchEnqueteTotalizadorParam(param), {
				method: 'get',
				mode: 'cors'
				}).then(response => response.json());
			}).then(result => {
				dispatch(getDataSuccessTotal(result));
				dispatch(listIsLoading(false));
			})
		.catch((error) => {
			dispatch(getDataFailure(true));
		});
	};

}
