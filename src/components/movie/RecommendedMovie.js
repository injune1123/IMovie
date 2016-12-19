import React, {PropTypes} from 'react';
import {Carousel, Button, Modal} from 'react-bootstrap';
import {browserHistory, Link} from 'react-router';

class RecommendedMovie extends React.Component{

	constructor(props, context) {
		super(props, context);
		this.state = {showModal: false};
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.saveCurMovieInfo = this.saveCurMovieInfo.bind(this);
	}
	close() {
		this.setState({ showModal: false });
	}
	open() {
		this.setState({ showModal: true });
	}
	saveCurMovieInfo(){
		sessionStorage.currentMovieId=this.props.movie.mid;
		sessionStorage.currentMovieLink=this.props.movie.mlink;
	}
	
	render() {
		return (
		<div className="movie" >	
			<div  onClick={this.open}>
				<img src={this.props.movie.mimg} alt="" width="80px" height="120px"/>
			</div>
			<Modal show={this.state.showModal} onHide={this.close} className="browse-movie-modal">
			  <Modal.Header closeButton>
				<Modal.Title>{this.props.movie.name}</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
			  	<img src={this.props.movie.mimg} alt="" width="200px" height="220px"/>
			  </Modal.Body>
			  <Modal.Footer>
				<Button onClick={this.close}>Close</Button>
				<Link to={'/movie/' + this.props.movie.mid}>        
        		<Button bsStyle="info" onClick={this.saveCurMovieInfo} >Watch Now</Button>
        		</Link>
			  </Modal.Footer>
			</Modal>
		</div>
		);
	}
}

export default RecommendedMovie;


