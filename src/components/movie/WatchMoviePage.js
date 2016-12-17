import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';


class WatchMoviePage extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			movie: Object.assign({}, props.movie),
			errors:{},
			saving: false
		};

	}

	play(){
		console.log("play");
	}

	componentDidMount(){
		console.log("mounted");
		let currentVideo = document.getElementById("cur-video");
		console.log(currentVideo);
		currentVideo.onplay = this.play;
	}


	render() {
		return (
			<video id="cur-video" width="400" controls>
			  <source src="https://s3-us-west-2.amazonaws.com/sadmovie/Toy-Story-3-Bonnie-Memorable-Moments-fJ3JIEQtxyU.mp4" type="video/mp4"/>
			  Your browser does not support HTML5 video.
			</video>
		);
	}	
}

export default WatchMoviePage;