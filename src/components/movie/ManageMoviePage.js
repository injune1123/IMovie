import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import MovieForm from './MovieForm';
import toastr from  'toastr';

class ManageMoviePage extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			movie: Object.assign({}, props.movie),
			errors:{},
			saving: false
		};
		this.updateMovieState = this.updateMovieState.bind(this);
		this.saveMovie = this.saveMovie.bind(this);

	}
	componentWillReceiveProps(nextProps){
		if(this.props.movie.vid != nextProps.movie.vid){
			this.setState({movie: Object.assign({}, nextProps.movie)});
		}
	}
	updateMovieState(event){
		const field = event.target.name;
		let movie = this.state.movie;
		movie[field] = event.target.value;
		return this.setState({movie: movie});
	}

	saveMovie(event){
		event.preventDefault();
		this.setState({saving: true});
		this.props.actions.saveMovie(this.state.movie)
			.then(() => this.redirect())
			.catch(error => {
				toastr.error(error);
				this.setState({saving: false});
			});
	}
	redirect(){
		this.setState({saving: false});
		toastr.success("course saved");
		this.context.router.push('/movies');
	}

	render(){
		return (
			<MovieForm 
				onChange={this.updateMovieState}
				allAuthors={this.props.authors}
				onSave={this.saveMovie}
				errors={this.state.errors}
				movie={this.state.movie}
				saving={this.state.saving}
			/>
		);
	}	
}

ManageMoviePage.propTypes = {
	movie: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

ManageMoviePage.contextTypes = {
	router: PropTypes.object
};
function getMovieById(movies, id){
	const movie = movies.filter(movie => movie.vid == id);
	if (movie.length){
		return movie[0];
	}else{
		return null;
	}
}
function mapStateToProps(state, ownProps){
	const movieId = ownProps.params.id;

	let movie = {vid: '', name: '', category: '', snapshot: '', playableUrl: ''};	
	
	if (movieId && state.movies.length > 0){
		movie = getMovieById(state.movies, movieId);
	}

	const authorsFormattedForDropdown = state.authors.map(
		author =>{
			return {
				value: author.id,
				text: author.firstName + ' ' + author.lastName
			};
		}
	);
	return {
		movie: movie,
		authors: authorsFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(movieActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMoviePage);