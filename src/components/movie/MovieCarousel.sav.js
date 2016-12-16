import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import MovieList from './MovieList';
import {browserHistory} from 'react-router';

class MovieCarousel extends React.Component{
	constructor(props, context){
		super(props, context);
	}
	render(){
		return (<div id="carousel" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
				<li data-target="#carousel-example-generic" data-slide-to="1"></li>
				<li data-target="#carousel-example-generic" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner" role="listbox">
				<div className="item active">
				<img  src="http://cdn.history.com/sites/2/2015/05/hith-titanic-tombstone-E.jpeg" alt="..."/>
				<div className="carousel-caption">
					<input
					type="submit"
					className="btn btn-primary"
					/>
				</div>
				</div>
			<div className="item">
				<img  src="https://images7.alphacoders.com/550/550739.jpg" alt="..."/>
				<div className="carousel-caption">	
				</div>
			</div>
			</div>
			<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
				<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
				<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>);

	}
}

export default MovieCarousel;

