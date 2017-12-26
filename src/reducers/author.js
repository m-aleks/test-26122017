import {
	AUTHOR_REQUEST,
	AUTHOR_REQUEST_SUCCESS,
	AUTHOR_REQUEST_FAIL,
	BOOKS_BY_AUTHOR_REQUEST,
	BOOKS_BY_AUTHOR_REQUEST_SUCCESS,
	BOOKS_BY_AUTHOR_REQUEST_FAIL
} from '../constants/ActionTypes'

const initialState = {
	fetchingInfo: false,
	fetchingBooks: false,
	info: {
		id: '',
		name: '',
		country: ''
	},
	books: [],
	error: false
}

export default function author(state = initialState, action){
	switch(action.type){
		case AUTHOR_REQUEST: return {...state, fetchingInfo: true}
		case AUTHOR_REQUEST_SUCCESS: return {...state, info: action.payload}
		case AUTHOR_REQUEST_FAIL: return {...state, error: true}
		case BOOKS_BY_AUTHOR_REQUEST: return {...state, fetchingBooks: true}
		case BOOKS_BY_AUTHOR_REQUEST_SUCCESS: return {...state, books: action.payload}
		case BOOKS_BY_AUTHOR_REQUEST_FAIL: return {...state, error: true}
		default: return state;
	}
}