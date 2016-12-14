import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';

class MoviePage extends React.Component{
	constructor(props, context){
		super(props, context);
	}
	movieRow(movie, index){
		return (<div key={index} className="movie">

			<p>{movie.name}</p>
			<img src={movie.snapshot} alt="" height="100" width="200"/>

		</div>	
		);
	}
	render(){
		return(
			<div>
				<h1>Movies recommended for you</h1>
				{this.props.movies.map(this.movieRow)}
			</div>
		);
	}
}

MoviePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);