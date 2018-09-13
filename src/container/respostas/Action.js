import resources  from "./Resources";
import { RESPOSTA_FETCHING_LIST_SUCCESS, RESPOSTA_FETCHING_LIST_FAILURE, RESPOSTA_FETCHING_LIST_LOADING } from "../../reducers/constants";


export function listIsLoading(bool: boolean) {
	return {
		type: RESPOSTA_FETCHING_LIST_LOADING,
		isLoading: bool,
	};
}

 export function getDataSuccess(data) {
	return {
		type: RESPOSTA_FETCHING_LIST_SUCCESS,
		data,
	};
  }

  export function getDataFailure(bool: boolean) {
	return {
        type: RESPOSTA_FETCHING_LIST_FAILURE,
        failure: bool,
	};
  }


export function fetchList(param: any) {
	return dispatch => {
		const resource = new resources();

		fetch(resource.fetchResposta()).then(response => response.json())
			.then(result => {
				dispatch(getDataSuccess(result));
				dispatch(listIsLoading(false));
			})
		.catch((error) => {
			dispatch(getDataFailure(true));
		});
	};

}

