import React from 'react';
import {Link} from 'react-router';

class UserProfilePage extends React.Component {
	render(){
		return (
			<div className="user-profile">
				<div className="col-md-4">
					<img className="avatar" src="http://www.warrenphotographic.co.uk/photography/bigs/02560-Ginger-cat-profile.jpg"/>
				</div>
				<div className="col-md-4">
					<span>
						Male
					</span>
				</div>
				<div className="row">
				</div>
				<div className="row">
					<span>
						Male
					</span>
				</div>
			</div>
		);
	}
}

export default UserProfilePage;
