import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render(){
		return (
			<div className="home">
				<div className="hero">
					<h1>See What You Love</h1>
					<p>Your Personalized Movie Land.</p>
					<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
				</div>
			</div>
		);
	}
}

export default HomePage;
