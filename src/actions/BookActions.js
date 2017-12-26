import {
	BOOK_INFO_REQUEST,
	BOOK_INFO_REQUEST_SUCCESS,
	BOOK_INFO_REQUEST_FAIL
} from '../constants/ActionTypes'

export default function getBookInfo(id) {
	return (dispatch) => {
		dispatch({
			type: BOOK_INFO_REQUEST
		})

		fetch('/api/books/' + id)
		.then(function(getBookInfoResponse){
			return getBookInfoResponse.json()
		})
		.then(function(bookInfo){
			dispatch({
				type: BOOK_INFO_REQUEST_SUCCESS,
				payload: bookInfo
			})
		})
		.catch(function(error) {
			dispatch({
				type: BOOK_INFO_REQUEST_FAIL
			});
			console.log('No info about the book: ' + error)
		})
	}
}