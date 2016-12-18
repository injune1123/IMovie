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
			saving: false,
			last_m: [],
			start: 0,
			uid:"amazing"
		};
	}
	componentDidMount(){
		socket.on('message', function(data){
	        res=JSON.parse(data);
	        console.log(data);
        });

		var currentVideo = document.getElementById("cur-video");
		function seeked(){
		        start = currentVideo.currentTime;
		        currentVideo.play();
		}
		var that = this;

		{/*start of event functions*/}

		function show(){
		        that.state.last_m.push(currentVideo.currentTime);	
		        console.log("show");
	        
		}
		function play() {

		        that.state.start = currentVideo.currentTime;
		}
		function pause() {
			console.log("in pause");

	    	if(that.state.last_m[that.state.last_m.length-3] === undefined || that.state.start > that.state.last_m[that.state.last_m.length-3] ) return;
	   		console.log("this.state", that.state.last_m);
	    	var data ={};
	    	var uid = that.state.uid;

	 	   	data["watch_interval"]=that.state.start+":"+that.state.last_m[that.state.last_m.length-3];
	       	data["mid"]="mid"; 
	    	data["epoch"]=new Date().getTime();
	    	data["uid"]='test'
		    console.log("data", data);

	    	socket.emit('watch_interval', data);

	        that.setState({"last_m":[]});
		}
		function makeBig() {
    		currentVideo.width = 560;
		}
		function makeSmall() {
		    currentVideo.width = 320;
		}
		function makeNormal() {
			currentVideo.width = 420;
		}
		
		{/*end of event functions*/}
		currentVideo.ontimeupdate = show;
		currentVideo.onplay = play;
		currentVideo.onpause= pause;
		currentVideo.onseeked= seeked;
	}

	render() {
		return (
			<div>
				<video id="cur-video" width="400" controls="true">
				  <source src="https://s3-us-west-2.amazonaws.com/sadmovie/Toy-Story-3-Bonnie-Memorable-Moments-fJ3JIEQtxyU.mp4" type="video/mp4"/>
				  Your browser does not support HTML5 video.
				</video>
			</div>
		);
	}	
}

export default WatchMoviePage;