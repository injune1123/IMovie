import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
	switch(action.type){
		case types.LOAD_MOVIES_SUCCESS:
			return action.movies;
		default:
			return state; 
	}

}