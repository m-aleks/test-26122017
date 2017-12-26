import {
	LIST_REQUEST,
	LIST_REQUEST_SUCCESS,
	LIST_REQUEST_FAIL
} from '../constants/ActionTypes'

const initialState = {
	fetching: false,
	items: [],
	error: false
}

export default function list(state = initialState, action){
	switch(action.type){
		case LIST_REQUEST: return {...state, fetching: true, items: []}
		case LIST_REQUEST_SUCCESS: return {...state, items: action.payload}
		case LIST_REQUEST_FAIL: return {...state, error: true}
		default: return state;
	}
}