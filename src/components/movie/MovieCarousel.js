import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import MovieList from './MovieList';
import {browserHistory} from 'react-router';
import {Carousel, Button} from 'react-bootstrap';
import {Link} from 'react-router';

class MovieCarousel extends React.Component{
	constructor(props, context){
		super(props, context);
	}
	render(){
		return (  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://cdn.history.com/sites/2/2015/05/hith-titanic-tombstone-E.jpeg"/>
      <Carousel.Caption>
        <Link to="movie">
          <Button bsStyle="info">Watch Now</Button>
        </Link>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://cdn.history.com/sites/2/2015/05/hith-titanic-tombstone-E.jpeg"/>
      <Carousel.Caption>
        <Link to="movie">
          <Button bsStyle="info">Watch Now</Button>
        </Link>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://cdn.history.com/sites/2/2015/05/hith-titanic-tombstone-E.jpeg"/>
      <Carousel.Caption>
        <Link to="movie">        
        <Button bsStyle="info">Watch Now</Button>
        </Link>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>);
	}
}

export default MovieCarousel;



