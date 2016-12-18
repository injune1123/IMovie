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
		alert("hi");
	}

	componentDidMount(){
		console.log("mounted");
		var currentVideo1 = document.getElementById("cur-video-1");
		var currentVideo2 = document.getElementById("cur-video-2");
		var playButton = document.getElementById("play-pause");

		var that = this;

		playButton.addEventListener("click", function() {
		  if (currentVideo2.paused == true) {
		  	that.play();
		    // Play the video
		    currentVideo2.play();
		   	socket.emit('click_video', {"uid": "yiyi", "epoch": new Date().getTime()});

		    // Update the button text to 'Pause'
		    playButton.innerHTML = "Pause";
		  } else {
		    // Pause the video
		    currentVideo2.pause();
		  	that.play();
		   	socket.emit('click_video', {"uid": "yiyi", "epoch": new Date().getTime()});

		    // Update the button text to 'Play'
		    playButton.innerHTML = "Play";

		  }
		});

		currentVideo1.onplay = this.play;
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
				<div id="video-controls">
					<button type="button" id="play-pause">Play</button>
					<input type="range" id="seek-bar" value="0"/>
					<button type="button" id="mute">Mute</button>
					<input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1"/>
					<button type="button" id="full-screen">Full-Screen</button>
				</div>
			</div>
		);
	}	
}

export default WatchMoviePage;