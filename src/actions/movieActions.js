import * as types from './actionTypes';
import movieAPI from '../api/mockMovieApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import axios from 'axios';

export function loadMoviesSuccess(movies){
	return {type: types.LOAD_MOVIES_SUCCESS, movies};
}

export function createMovieSuccess(movie){
	return {type: types.CREATE_MOVIE_SUCCESS, movie};
}

export function updateMovieSuccess(movie){
	return {type: types.UPDATE_MOVIE_SUCCESS, movie};
}

export function loadMovies(){
	return function(dispatch){
		dispatch(beginAjaxCall());
		return axios.get('http://54.221.40.5:8111/getmid?mid=1')
		.then(movies => {
			var recMovieList = movies.data.data.rec_list;
			dispatch(loadMoviesSuccess(recMovieList));
		}).catch(error => {
			throw(error);
		});
	};
}

export function saveMovie(movie){
	return function(dispatch){
		dispatch(beginAjaxCall());
		return movieAPI.saveMovie(movie).then(
			movie => {
				movie.id ? dispatch(updateMovieSuccess(movie)) :
				dispatch(createMovieSuccess(movie));
			}
		).catch(error =>{
			dispatch(ajaxCallError(error));
			throw(error);
		});
	};
}