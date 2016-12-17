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
		alert("play");
	}

	componentDidMount(){
		console.log("mounted");
		let currentVideo1 = document.getElementById("cur-video-1");
		let currentVideo2 = document.getElementById("cur-video-12");

		currentVideo1.onplay = this.play;
		currentVideo2.onplay = this.play;
	}


	render() {
		return (
			<div>
				<video id="cur-video-1" width="400" controls="true">
				  <source src="https://s3-us-west-2.amazonaws.com/sadmovie/Toy-Story-3-Bonnie-Memorable-Moments-fJ3JIEQtxyU.mp4" type="video/mp4"/>
				  Your browser does not support HTML5 video.
				</video>
	
				<video id="cur-video-2" width="400">
				  <source src="https://s3-us-west-2.amazonaws.com/sadmovie/Toy-Story-3-Bonnie-Memorable-Moments-fJ3JIEQtxyU.mp4" type="video/mp4"/>
				  Your browser does not support HTML5 video.
				</video>
			</div>
		);
	}	
}

export default WatchMoviePage;