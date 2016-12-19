import React, {PropTypes} from 'react';
import {Carousel, Button, Modal} from 'react-bootstrap';
import {browserHistory, Link} from 'react-router';

class RandomMovieSelectionList extends React.Component{

	constructor(props, context) {
		super(props, context);
		this.changeMovie = this.changeMovie.bind(this);
	}
	changeMovie(){
		var video = document.getElementById('cur-video');
		video.src= this.props.movie.mlink;
	  	video.load();
	  	video.play();

	}
	render() {
		return (
			<img src={this.props.movie.mimg} onClick={this.changeMovie} alt="" width="80px" height="120px"/>
		);
	}
}

export default RandomMovieSelectionList;


