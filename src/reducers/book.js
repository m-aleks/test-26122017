import {
	BOOK_INFO_REQUEST,
	BOOK_INFO_REQUEST_SUCCESS,
	BOOK_INFO_REQUEST_FAIL
} from '../constants/ActionTypes'

const initialState = {
	fetchingInfo: false,
	info: {
		id: '',
		pages: '',
		year: '',
		title: '',
		author: {
			id: '',
			name: '',
			country: ''
		}
	},
	error: false
}

export default function book(state = initialState, action){
	switch(action.type){
		case BOOK_INFO_REQUEST: return {...state, fetchingInfo: true}
		case BOOK_INFO_REQUEST_SUCCESS: return {...state, info: action.payload}
		case BOOK_INFO_REQUEST_FAIL: return {...state, error: true}
		default: return state;
	}
}