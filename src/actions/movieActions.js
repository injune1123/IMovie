import * as types from './actionTypes';
import movieAPI from '../api/mockMovieApi';

export function loadMoviesSuccess(movies){
	return {type: types.LOAD_MOVIES_SUCCESS, movies};
}

export function loadMovies(){
	return function(dispatch){
		return movieAPI.getAllMovies().then(movies => {
			dispatch(loadMoviesSuccess(movies))
		}).catch(error => {
			throw(error);
		})
	};
}