import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from  'toastr';



class SignupPage extends React.Component{

	render () {
		return (
			<div className="wrapper">
				<form className="form-signin">
				<h2 className="form-signin-heading">Please Signup</h2>

				<input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
				<input type="password" className="form-control" name="password" placeholder="Password" required="" />      
				<input type="password" className="form-control" name="re-password" placeholder="Confirm Password" required="" />      

				<button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>   
				</form>
			</div>
		);
	}
}

export default SignupPage;


