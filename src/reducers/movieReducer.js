import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
	switch(action.type){
		case types.CREACT_COURSE:
			return [...state,
			Object.assign({}, action.movie)
			];
		default:
			return state; 
	}

}