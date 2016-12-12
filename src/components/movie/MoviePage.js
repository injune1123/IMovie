import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';

class MoviePage extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			movie: { title: "" }
		};
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}
	onTitleChange(event){
		const movie = this.state.movie;
		movie.title = event.target.value;
		this.setState({movie: movie});
	}
	onClickSave(){
		this.props.actions.createMovie(this.state.movie);
	}
	movieRow(movie, index){
		return (<div key={index}>{movie.title}</div>);
	}
	render(){
		return(
			<div>
				<h1>Movies recommended for you</h1>
				{this.props.movies.map(this.movieRow)}
				<h2>Add Movie</h2>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.movie.title}
				/>
				<input
					type="submit"
					value="Save"
					onClick={this.onClickSave}
				/>
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