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

	render() {
	    return (

        <Video controls autoPlay loop muted
        	className="current-movie"
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="https://s3-us-west-2.amazonaws.com/sadmovie/Toy-Story-3-Bonnie-Memorable-Moments-fJ3JIEQtxyU.mp4" type="video/mp4" />
        
           <Overlay />
            <Controls>
                <Play />
                <Seek />
                <Time />
                <Mute />
                <Fullscreen />
            </Controls>

        </Video>

	    );
	}	
}

export default WatchMoviePage;