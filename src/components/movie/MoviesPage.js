import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import MovieList from './MovieList';
import MovieCarousel from './MovieCarousel';
import {browserHistory} from 'react-router';
import RecommendedMovie from './RecommendedMovie';
import StringRecommendation from './StringRecommendation';

class moviesPage extends React.Component{
	constructor(props, context){
		super(props, context);
		this.redirectToAddMoviePage = this.redirectToAddMoviePage.bind(this);
	}
	movieRow(movie, index){
		return (
		<RecommendedMovie movie={movie}/>
	);
	}
	redirectToAddMoviePage(){
		browserHistory.push('/movie');
	}
	render(){
		const {movies} = this.props;

		return(
		<div id="movies-page">
			{/* <h1>Movies</h1>
			<input type="submit"
				value="Add Movie"
				className="btn btn-primary"
				onClick={this.redirectToAddMoviePage}
			/>
			<MovieList movies={movies}/>
			*/}
			
			<MovieCarousel movies={movies}/>
			<div>
				<div id="recommended-movies-header-wrapper">	
					<h1>Recommended Movies</h1>
				</div>
				{this.props.movies.map(this.movieRow)}
				<StringRecommendation/>

			</div>
			
		</div>);
	}
}

moviesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	movies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
	return {
		movies: state.movies
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(movieActions,dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(moviesPage);