import React, {PropTypes} from 'react';
import {Carousel, Button, Modal} from 'react-bootstrap';

class RecommendedMovie extends React.Component{

	constructor(props, context) {
		super(props, context);
		this.state = {showModal: false};
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
	}
	close() {
		this.setState({ showModal: false });
	}
	open() {
		this.setState({ showModal: true });
	}
	render() {
		return (
		<div className="movie">	
			<div  onClick={this.open}>
				<p>{this.props.movie.name}</p>
				<img src={this.props.movie.mimg} alt="" height="100" width="200"/>
			</div>

			<Modal show={this.state.showModal} onHide={this.close}>
			  <Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				<h4>Text in a modal</h4>
				<hr />
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


