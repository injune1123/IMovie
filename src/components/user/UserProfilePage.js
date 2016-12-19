import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

class UserProfilePage extends React.Component {
	render(){
		return (
			<div className="user-profile">
				<h1>Manage Profile</h1>
				<div className="col-md-3">
					<img width="200px" height="150px" src="https://s3-us-west-2.amazonaws.com/imovie/harleyquinnposter.png"/>
				</div>
				<div className="col-md-9">
				<div className="col-md-3">
				<p>
					User Name:	
					</p>
				</div>
					<div className="col-md-3">
					<span>
						Gender:
					</span>
					</div>
					<div className="col-md-3">
				<p>
					Marital status:	
					</p>
				</div>
				</div>
				<div className="row-md-4">
				<Link to='/movies'>        
	        		<Button bsStyle="info">Home</Button>
        			</Link>
				</div>
			</div>
		);
	}
}

export default UserProfilePage;
