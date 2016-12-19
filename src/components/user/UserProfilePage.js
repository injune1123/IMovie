import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

class UserProfilePage extends React.Component {
	render(){
		return (
			<div className="user-profile">
			    <h1>Manage Profile</h1>
			    <div className="col-md-3">
			    	<div class="row">
			            <img width="200px" height="150px" src="https://s3-us-west-2.amazonaws.com/imovie/harleyquinnposter.png"/>
			        </div>
			        <div className="row">
			        	<br></br>
			        	<Link to='/movies'>
			        	<Button bsStyle="info">Home</Button>
			        	</Link>
			    	</div>
			    </div>
			    <div className="col-md-9">
			        <h2>Personal information</h2>
			        <div className="col-md-3">
			            <p>
			                User Name:
			            </p>
			        </div>
			        <div className="col-md-3">
							<p>
							Gender:
							</p>
			        </div>
			        <div className="col-md-4">
			            <p>
			                Marital status:
			            </p>
			        </div>
			        <br></br>
			        <div className="col-md-3">
			            <p>
			                Country:
			            </p>
			        </div>
			        <div className="col-md-3">
							<p>
							State:
							</p>
			        </div>
			        <div className="col-md-4">
			            <p>
			                City:
			            </p>
			        </div>
			    </div>
			    <div className="col-md-9">
			        <h2>Personal interests</h2>
			        <div className="col-md-3">
			            <p>
			                Comedy
			            </p>
			        </div>
			        <div className="col-md-3">
							<p>
							Romance
							</p>
			        </div>
			        <div className="col-md-3">
			            <p>
			                Mystery
			            </p>
			        </div>
			    </div>
			</div>
			);
	}
}

export default UserProfilePage;
