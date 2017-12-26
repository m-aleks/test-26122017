import {
	AUTHOR_REQUEST,
	AUTHOR_REQUEST_SUCCESS,
	AUTHOR_REQUEST_FAIL,
	BOOKS_BY_AUTHOR_REQUEST,
	BOOKS_BY_AUTHOR_REQUEST_SUCCESS,
	BOOKS_BY_AUTHOR_REQUEST_FAIL
} from '../constants/ActionTypes'

export default function getAuthorInfo(id) {
	return (dispatch) => {
		dispatch({
			type: AUTHOR_REQUEST
		})

		fetch('/api/authors/' + id)
		.then(function(getAuthorInfoResponse){
			return getAuthorInfoResponse.json()
		})
		.then(function(authorInfo){
			dispatch({
				type: AUTHOR_REQUEST_SUCCESS,
				payload: authorInfo
			})

// if the author exists then fetch his books list
			if(authorInfo){
				dispatch({
					type: BOOKS_BY_AUTHOR_REQUEST
				})

				fetch('/api/authors/' + id + '/books')
				.then(function(getAuthorBooksResponse){
					return getAuthorBooksResponse.json()
				})
				.then(function(authorBooks){
					dispatch({
						type: BOOKS_BY_AUTHOR_REQUEST_SUCCESS,
						payload: authorBooks
					})
				})
				.catch(function(error) {
					dispatch({
						type: BOOKS_BY_AUTHOR_REQUEST_FAIL
					});
					console.log('No books of the author were found: ' + error)
				})
			}
// end of - if the author exists then fetch his books list	

		})
		.catch(function(error) {
			dispatch({
				type: AUTHOR_REQUEST_FAIL
			});
			console.log('Got nothing in list: ' + error)
		})
	}
}