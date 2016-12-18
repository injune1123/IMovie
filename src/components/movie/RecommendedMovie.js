import React, {PropTypes} from 'react';
import {Carousel, Button, Modal} from 'react-bootstrap';

class RecommendedMovie extends React.Component{

	constructor(props, context) {
		super(props, context);
		this.state = {showModal: false};
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		console.log('get')
		console.log(this.props.movie)
	}
	close() {
		this.setState({ showModal: false });
	}
	open() {
		this.setState({ showModal: true });
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
			  	<Button >Watch</Button>	
			  </Modal.Body>
			  <Modal.Footer>
				<Button onClick={this.close}>Close</Button>
			  </Modal.Footer>
			</Modal>
		</div>
		);
	}
}

export default RecommendedMovie;


