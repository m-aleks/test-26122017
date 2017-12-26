import {
	LIST_REQUEST,
	LIST_REQUEST_SUCCESS,
	LIST_REQUEST_FAIL
} from '../constants/ActionTypes'

export default function getList(listType) {
	return (dispatch) => {
		dispatch({
			type: LIST_REQUEST
		})

		fetch('/api/' + listType)
		.then(function(getListResponse){
			return getListResponse.json()
		})
		.then(function(list){
			dispatch({
				type: LIST_REQUEST_SUCCESS,
				payload: list
			})
		})
		.catch(function(error) {
			dispatch({
				type: LIST_REQUEST_FAIL
			});
			console.log('Got nothing in list: ' + error)
		})
	}
}