import {combineReducers} from 'redux';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import todoListReducer from './todoListReducer';
import updateListReduer from './updateListReduer';

const rootReducer = combineReducers({
	todoListReducer,
	updateListReduer,
});

export default function configureStore() {
	return createStore(rootReducer, applyMiddleware(thunk));
}
