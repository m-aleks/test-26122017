import { combineReducers} from 'redux'
import list from './lists'
import author from './author'
import book from './book'


const rootReducer = combineReducers({
	list,
	author,
	book
})
export default rootReducer