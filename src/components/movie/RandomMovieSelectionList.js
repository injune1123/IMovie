import React, {PropTypes} from 'react';
import {Carousel, Button, Modal} from 'react-bootstrap';
import {browserHistory, Link} from 'react-router';
import * as movieActions from '../../actions/movieActions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class RandomMovieSelectionList extends React.Component{

	constructor(props, context) {
		super(props, context);
		this.changeMovie = this.changeMovie.bind(this);
		this.state={
			movies: []
		};

	}
	componentDidMount(){
		this.setState({movies: this.props.movies})
	}
	updateList(){
		axios.get('http://54.221.40.5:8111/getmid?mid=1')
		.then(movies => {
			var recMovieList = movies.data.data.rec_list;
			that.setState({movies: recMovieList});

		}).catch(error => {
			throw(error);
		});
	}
	changeMovie(){
		var video = document.getElementById('cur-video');
		video.src= "this.props.movie.mlink";
	  	video.load();
	  	video.play();
	}
	render() {
		console.log("I want to go back home!", this.state.movies);
		return( 
		<div>
		{this.props.movies.map(function(m){
			return <img src={m.mimg} onClick={function(){
				var video = document.getElementById('cur-video');
				video.src= m.mlink;
	  			video.load();
	  			video.play();
	  			that.setState({a:"1"});
	  			this.updateList();
	  		}
	  		}/>
		})}
		</div>
		)
	}
}
function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(movieActions,dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomMovieSelectionList);



