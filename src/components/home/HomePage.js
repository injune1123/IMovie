import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render(){
		return (
			<div className="home">
				<div className="hero">
					<h1>See What You Love</h1>
					<span>Your Personalized Movie Land.</span>
					<Link to="about">Learn more</Link>
					<div>
					<Link to="movie" className="btn btn-primary btn-lg">Sign In to Watch</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
